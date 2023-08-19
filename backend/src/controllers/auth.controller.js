const bcrypt = require("bcrypt");
const { createUserSchema, loginUserSchema } = require("../schema/auth.schema");
const User = require("../models/user.model");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthorizedError } = require("../errors");
const { fromZodError } = require("zod-validation-error");
const jwt = require("jsonwebtoken");
const THERAPISTS = require("../config/therapists");

const registerUserController = async (req, res) => {
  const result = createUserSchema.safeParse(req.body);

  const ACCESS_TOKEN_EXPIRATION = 60 * 60 * 1000;
  const COOKIE_MAX_AGE = 24 * 60 * 60 * 1000;

  if (!result.success) {
    throw new BadRequestError(fromZodError(result.error).toString());
  }

  let role = "User";

  if (THERAPISTS.includes(role)) role = "Therapist";

  const foundUser = await User.findOne({ username: result.data.username });

  if (foundUser) throw new BadRequestError("User already exists");

  const user = await User.create({
    username: result.data.username,
    date_of_birth: result.data.date_of_birth,
    wallet_address: result.data.wallet_address,
  });

  const authToken = jwt.sign(
    { username: user.username, id: user.id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return res
    .status(StatusCodes.CREATED)
    .json({ token: authToken, user, message: "successful" });
};

const loginUserController = async (req, res) => {
  const cookie = req.cookies;
  const refreshToken = cookie?.jwt;
  const result = loginUserSchema.safeParse(req.body);

  try {
    if (!result.success) {
      throw new BadRequestError(fromZodError(result.error).toString());
    }

    const foundUser = await User.findOne({
      wallet_address: result.data.wallet_address,
    });

    if (!foundUser)
      throw new BadRequestError("No user found with this username");

    if (foundUser) {
      const COOKIE_MAX_AGE = 24 * 60 * 60 * 1000;
      const ACCESS_TOKEN_EXPIRATION = 60 * 60 * 1000;

      const accessToken = jwt.sign(
        { username: foundUser.username, id: foundUser.id },
        process.env.JWT_SECRET,
        { expiresIn: ACCESS_TOKEN_EXPIRATION }
      );
      const newRefreshToken = jwt.sign(
        { username: foundUser.username },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      let newRefreshTokenArray = !cookie?.jwt
        ? foundUser.refreshToken
        : foundUser.refreshToken.filter((token) => token !== cookie?.jwt);

      if (cookie?.jwt) {
        res.clearCookie("jwt", {
          maxAge: 24 * 60 * 60 * 1000,
          httpOnly: true,
          sameSite: "None",
        });

        const foundToken = await User.findOne({ refreshToken }).exec();

        if (!foundToken) {
          console.log("Token reuse detected");
          newRefreshTokenArray = [];
        }
      }

      foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
      const result = await foundUser.save();

      res.cookie("jwt", newRefreshToken, {
        httpOnly: true,
        maxAge: COOKIE_MAX_AGE,
        sameSite: true,
      });

      return res.status(StatusCodes.OK).json({
        token: accessToken,
        expiresIn: ACCESS_TOKEN_EXPIRATION,
        user: foundUser,
      });
    }
  } catch (e) {
    console.error(e);
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "invalid details" });
  }
};

const refreshTokenController = async (req, res) => {
  const cookie = req.cookies;

  const ACCESS_TOKEN_EXPIRATION = 60 * 60 * 1000;

  if (!cookie?.jwt) {
    throw new UnauthorizedError("You are not authorized to access this route");
  }

  const refreshToken = cookie.jwt;
  res.clearCookie("jwt", {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "None",
  });

  const user = await User.findOne({ refreshToken }).exec();

  //reuse detected
  if (!user) {
    jwt.verify(refreshToken, process.env.JWT_SECRET, async (err, data) => {
      if (err) {
        throw new Forbidden("bad token for reuse");
      }

      const user = await User.findOne({ email: data.email }).exec();

      if (user) {
        user.refreshToken = [];
      }
    });

    throw new UnauthorizedError("Token reuse");
  }

  let newRefreshTokenArray = user.refreshToken.filter(
    (token) => token !== refreshToken
  );

  jwt.verify(refreshToken, process.env.JWT_SECRET, async (err, data) => {
    if (err) {
      user.refreshToken = [...newRefreshTokenArray];
      const result = await user.save();
    }
    if (err || data.email !== user.email) {
      throw new Forbidden("Bad Token");
    }

    const accessToken = jwt.sign(
      { username: user.username, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: ACCESS_TOKEN_EXPIRATION }
    );

    const newRefreshToken = jwt.sign(
      { username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    user.refreshToken = [...newRefreshTokenArray, newRefreshToken];
    const result = await user.save();

    res.cookie("jwt", newRefreshToken, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "None",
    });

    return res
      .status(StatusCodes.OK)
      .json({ accessToken, expiresIn: ACCESS_TOKEN_EXPIRATION });
  });
};

const logoutUserController = async (req, res) => {
  // clear tokens in frontend
  const cookie = req.cookies;

  if (!cookie?.jwt) {
    return res.sendStatus(StatusCodes.NO_CONTENT);
  }

  const refreshToken = cookie.jwt;
  const user = await User.findOne({ refreshToken }).exec();

  if (!user) {
    res.clearCookie("jwt", {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "None",
    });
    return res.sendStatus(StatusCodes.NO_CONTENT);
  }

  user.refreshToken = user.refreshToken.filter(
    (token) => token !== refreshToken
  );
  res.clearCookie("jwt", {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "None",
  });

  const result = await user.save();

  return res.sendStatus(StatusCodes.NO_CONTENT);
};

module.exports = {
  registerUserController,
  loginUserController,
  logoutUserController,
  refreshTokenController,
};
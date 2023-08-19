const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const { UnauthorizedError } = require("../errors");
const decodeToken = require("../utils/decodeToken");
const { request } = require("express");

const verifyJWT = async (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    throw new UnauthorizedError("You do not have the access token");
  }
  const accessToken = authHeader.split(" ")[1];

  const verifyToken = decodeToken(accessToken);

  console.log(verifyToken);

  if (verifyToken) {
    const user = await User.findOne({ username: verifyToken.username });
    req.user = user;
    req.id = user.id;

    return next();
  }

  return res.status(403).send("Bad Access Token");

  // jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
  //   if (err) {
  //     // throw new UnauthorizedError('Bad Access Token')
  //     return res.status(403).send("Bad Access Token");
  //   }
  //   req.id = data.id;
  //   req.username = data.username;
  //   next();
  // });
};

module.exports = verifyJWT;
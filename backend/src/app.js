require("express-async-errors");
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const connectDB = require("./config/db-conn");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const routeNotFound = require("./middlewares/route-not-found");
const verifyJWT = require("./middlewares/verifyJWT");
const authRouter = require("./routes/auth.route");
const http = require("http");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { Server } = require("socket.io");
const {
  addUserToRoomController,
  removeUserFromRoomController,
} = require("./controllers/group.controller");
const Message = require("./models/message.model");
const Group = require("./models/group.model");
const User = require("./models/user.model");
const formatMessage = require("./utils/messages");
const decodeToken = require("./utils/decodeToken");

connectDB(process.env.DATABASE_URI);

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    return res.send("Home page");
});
app.use("/api/v1/auth", authRouter);

app.use(verifyJWT);

app.use(routeNotFound);
app.use(errorHandlerMiddleware);

module.exports = server;
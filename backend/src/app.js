require("express-async-errors");
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const connectDB = require("./config/db-conn");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const routeNotFound = require("./middlewares/route-not-found");
const http = require("http");


const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    return res.send("Home page");
});

app.use(routeNotFound);
app.use(errorHandlerMiddleware);

module.exports = server;
const express = require("express");

const app = express();
const dotenv = require("dotenv");

const mongoose= require("mongoose");
dotenv.config();

const connectDB = require('./config/empDB')
const MONGO_URI = process.env.MONGO_URI
connectDB(MONGO_URI)


app.listen(4005,()=> console.log("server running on port 4005!"))
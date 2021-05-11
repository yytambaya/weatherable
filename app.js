//imports
const express = require('express');
const dotenv = require('dotenv');
const request = require('request');
const cors = require('cors');
//const mongoose = require("mongoose");

//variables
const app = express();
require("./routers").allrouters((app));
//const router = express.Router().route('/');

//init/configs
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("Weatherable APIs");
});

app.listen( process.env.PORT || 5000, ()=>{
    console.log("Weatherable Server started...");
})
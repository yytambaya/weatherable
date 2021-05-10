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
//console.log(process.env.DB_URL);
//DB connection

/*mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(  () => {
    console.log("DB connected");
})
.catch( (err) => {
    console.log("Can't connect to DB:");
})*/



//body
app.get("/", (req, res) => {
    res.send("Weatherable APIs");
});

app.post('/apis', (req, res) => {
    res.send("APIs Home ID: " + req.body.id + " email: " + req.body.email + " password: " + req.body.password);
    console.log("APIs Home");
});

app.listen( process.env.PORT || 5000, ()=>{
    console.log("AssetsRoom Server started...");
})
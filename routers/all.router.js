const controllers = require('../controllers');
const middlewares = require("../middlewares");
const express = require("express");
const cors = require('cors');

module.exports = app => {
    
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    const router = require("express").Router();
    app.use(controllers, router);
    app.use(cors());

    app.get('/activate',  (req, res) => {res.json({error: "error", result: "Activate"})});
    app.post('/postactivate',  (req, res) => {res.json({error: "error", result: "POST Activate"})});
    app.get('/conditions',  controllers.allcontrollers.getWeatherConditions);
}
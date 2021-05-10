const controllers = require('../controllers');
const middlewares = require("../middlewares");
const express = require("express");
const cors = require('cors');
//const { userValidationRules, validate } = require('../middlewares')

module.exports = app => {
    
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    const router = require("express").Router();
    app.use(controllers, router);
    app.use(cors());

    //app.post('/signup', [middlewares.userValidationRules(), middlewares.validate, middlewares.Auth.accountExists], controllers.login.signUp);
    app.get('/activate',  (req, res) => {res.json({error: "error", result: "Activate"})});
    app.post('/postactivate',  (req, res) => {res.json({error: "error", result: "POST Activate"})});
    app.get('/conditions',  controllers.allcontrollers.getWeatherConditions);
    
    /*app.post('/login', controllers.login.signIn);
    app.get('/dashboard', [middlewares.Auth.isLogged], controllers.dashboard.getHomepage);
    app.post('/forgotpassword', controllers.login.forgotPassword);
    app.get('/reset',  controllers.login.passwordReset);
    app.post('/newpassword', [middlewares.Auth.verifyToken], controllers.login.newPassword);
    app.post('/pay', [middlewares.Auth.isLogged], controllers.login.pay);
    app.post('/verifypayment', [middlewares.Auth.isLogged], controllers.login.verifyPayment);
    app.get('/dashboard', [middlewares.Auth.isLogged], controllers.dashboard.getHomepage);
    app.get('/setresource', [middlewares.Auth.isLogged], controllers.dashboard.getHomepage);
    app.get('/getallresources', [middlewares.Auth.isLogged], controllers.dashboard.getHomepage);
    app.get('/getresource', [middlewares.Auth.isLogged], controllers.dashboard.getHomepage);
    app.get('/editresource', [middlewares.Auth.isLogged], controllers.dashboard.getHomepage);
    app.get('/removeresource', [middlewares.Auth.isLogged], controllers.dashboard.getHomepage);
    */
    //app.post('')
    //app.get('/dashbaord', middlewares.Auth, controllers.dashboard.getAllAssets);
    //app.use('/dashbaord', [auth.Auth], controllers.dashboard.getAllAssets)
    //app.get('/assets', controllers.dashboard.getAllAssets);
    //app.get('/asset', controllers.dashboard.getAsset);
    //app.get('/asset/buy', controllers.dashboard.buyAsset);
    //app.get('/asset/sell', controllers.dashboard.sellAsset);
}
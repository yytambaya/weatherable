const { default: axios } = require("axios");
const dotenv = require("dotenv");
const request = require("request");

exports.getWeatherConditions = (req, res) => {
    if(req.query.city != undefined && req.query.city != ""){
        const API_KEY = process.env.OPENWEATHER_API_KEY;
        const city = req.query.city;
        const API_URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=fc058205a95360e0755b20358f6f9560';
        //const FULL_API_URL = `${API_URL}?q=${city}&appid=${API_KEY}` 
        request(API_URL, function(err, res2, body) {
            if(err){
                res.json({error: "error", result: "Something went wrong"})
            }
                var weather = JSON.parse(body);
                if(weather.name != undefined && weather.name != ""){
                    if(city.toLowerCase() == weather.name.toLowerCase()){
                        //console.log(weather.name);
                        console.log("Temperature: ", weather.main.temp)
                        console.log("Presseure: ", weather.main.pressure)
                        console.log("wind", weather.wind.speed)
                        var temp = weather.main.temp;
                        var pressure = weather.main.pressure;
                        var wind = weather.wind.speed;
                        //var weather =            
                        res.json(analyzeWeather(temp, wind))
                    }else{
                        res.json({error: "error", result: "Something went wrong"})
                    }
                }else{
                    res.json({error: "error", result: "Something went wrong"})
                }
                if(err){
                //console.log("Error:", )
                    res.json({error: "error", result: "Something went wrong"})
                }
                
        });
    }else{
        return res.json({error: "error", result: "param required"})
    }
}


const analyzeWeather = (temp, wind)  => {
    var r_temp = r_wind = r_rain = ""; 
    if(temp <= 50){
        r_temp = "Normal temperature";
        r_rain = "The cloud is ok";
    }else if(temp >= 50 &&  temp <= 80){
        r_temp = "Aggresive temperature";
        r_rain = "It's more likely to rain";
    }else if(temp > 80){
        r_temp = "Dengerous temperature";
        r_rain = "It's more likly to rain";
    }
    if(wind <= 13){
        r_wind = "Wind is Normal"
    }else if(wind >= 13 && wind <= 18){
        r_wind = "Strong wind, can kill!";
    }else if(wind > 18){
        r_wind = "Intesive dengerous wind. Don't go out!!!"
    }

    return {error: "", result:{temp: r_temp, wind: r_wind, rainfall: r_rain}}
}
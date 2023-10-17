const exprss = require("express");
const { get } = require("http");
const https = require("https");


const app = exprss();

app.get("/", function (req, res) {
    var url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=5116cf79debb16b5364163b9ce82bc4e";

    https.get(url, function (res1) {
        res1.on("data", function (data) {
            var wheatherData = JSON.parse(data);

            const temp = wheatherData.main.temp;
            const des = wheatherData.weather[0].description;
            const icon = wheatherData.weather[0].icon;

            const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";


            res.write("<h1>The Temprature is : " + temp + " degrees Kelvin</h1>");
            res.write("The Wheather description is : " + des + "<br>");
            res.write("<img src=" + imageUrl + ">");
            res.send();

        });
    });
});


app.listen("100", console.log("server is up"));
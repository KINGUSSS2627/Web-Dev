const express = require("express");
const https = require("https");
const app = express();



app.get("/", function (req, res) {

    var url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=5116cf79debb16b5364163b9ce82bc4e";

    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {
            var wheatherData = JSON.parse(data);

            const temp = wheatherData.main.temp;
            const pressure = wheatherData.main.pressure;
            const wDes = wheatherData.weather[0].description;


            console.log(temp);
            console.log(pressure);
            console.log(wDes);
        });
    });

    res.send("<em>Hi</em>");
});


app.listen("100", function () {
    console.log("Server is up at port 100");
});
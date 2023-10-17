var exprss = require("express");
var https = require("https");
var bodyParser = require("body-parser");


const app = exprss();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {

    var city = req.body.cityName;
    var apiId = "5116cf79debb16b5364163b9ce82bc4e";
    var unit = req.body.unit;
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + unit + "&appid=" + apiId;

    https.get(url, function (res1) {
        res1.on("data", function (data) {
            var wheatherData = JSON.parse(data);

            const temp = wheatherData.main.temp;
            const des = wheatherData.weather[0].description;
            const icon = wheatherData.weather[0].icon;

            const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";


            res.write("<h1>The Temprature in " + city + " is : " + temp + " degrees celcious</h1>");
            res.write("The Wheather description is : " + des + "<br>");
            res.write("<img src=" + imageUrl + ">");
            res.send();

        });
    });
});




app.listen("100", console.log("server is up"));
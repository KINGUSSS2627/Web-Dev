const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/bmi.html")
});

app.post("/", function (req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var result = parseFloat((weight) / (height * height)).toFixed(4);

    res.send("Your Bmi is : " + result);
});


app.listen("3000");
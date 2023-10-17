const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    var today = new Date();
    var Currday = today.getDay();
    var day = "";

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    day = days[Currday];

    res.render("list", { kindOfDay: day });
});



app.listen(3000, function () {
    console.log("Server is up");
});


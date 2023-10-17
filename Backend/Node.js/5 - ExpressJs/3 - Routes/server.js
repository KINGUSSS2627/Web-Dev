var express = require("express");

const app = express();

app.get("/", function (req, res) {
    res.send("<em>Hello</em>");
})

app.get("/contact", function (req, res) {
    res.send("Contact me at : <em>harshgupta.dpn@gmail.com</em>");
});

app.get("/about", function (req, res) {
    res.send("<em>Hey Folks !</em><br>I am <b>KINGUSSS</b>");
});

app.get("/hobbies", function (req, res) {
    res.send("<em>Maths is Life !</em>");
});

app.listen(3000, function () {
    console.log("Server 3000 is up");
});
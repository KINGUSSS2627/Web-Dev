var express = require("express");

const app = express();

app.get("/", function (req, res) {
    console.log(req);
    res.send("Hello");
})

app.listen(3000, function () { console.log("Server 3000 is up") });
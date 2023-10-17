require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs  = require("ejs");
const md5 = require("md5");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.set('strictQuery',true);
mongoose.connect("mongodb://127.0.0.1:27017/userDB" ,{useNewUrlParser :true, useUnifiedTopology :true});


const userSchema = new mongoose.Schema({
    email : String,
    password : String
});


const User = new mongoose.model("User" , userSchema);

app.get("/", (req,res)=>{
    res.render("home");
})

app.get("/login", (req,res)=>{
    res.render("login");
})

app.get("/register", (req,res)=>{
    res.render("register");
})

app.get("/secrets", (req,res)=>{
    res.render("secrets");
})

app.post("/register",(req,res)=>{
    const newUser = new User({
        email : req.body.username,
        password : md5(req.body.password)
    });

    newUser.save((err)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("The data of newUser is been added to the database");
            res.render("secrets");
        }
    });
})

app.post("/login",(req,res)=>{
    const username = req.body.username;
    const password = md5(req.body.password);

    User.findOne({email : username},(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            if(result.password === password)
            {
                res.render("secrets");
            }
            else
            {
                res.redirect("/login");
            }
        }
    })
})

app.listen(3000 , function(){console.log("Server is up")});
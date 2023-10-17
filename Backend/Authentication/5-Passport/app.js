require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs  = require("ejs");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret:"HelloFriedsChaiPeelo",
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("public"));

mongoose.set('strictQuery',true);
mongoose.connect("mongodb://127.0.0.1:27017/userDB" ,{useNewUrlParser :true, useUnifiedTopology :true});


const userSchema = new mongoose.Schema({
    email : String,
    password : String
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User" , userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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
    if(req.isAuthenticated())
    {
        res.render("secrets");
    }
    else
    {
        res.redirect("/login");
    }
})

app.post("/register",(req,res)=>{
    User.register({username: req.body.username}, req.body.password, (err,user)=>{
        if(err)
        {
            console.log(err);
            res.redirect("/register");
        }
        else
        {
            passport.authenticate("local")(req, res ,()=>{
                res.redirect("/secrets");
            });
        }
    });
})

app.post("/login",(req,res)=>{
    const user = new User({
        username: req.body.username,
        password: req.body.password
    })

    req.login(user, (err)=> {
        if(err)
        {
            console.log(err);
            res.redirect("/login");
        }
        else
        {
            passport.authenticate("local")(req, res ,()=>{
                res.redirect("/secrets");
            });
        }
    })

})

app.get('/logout', function(req, res, next){
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  });

app.listen(3000 , function(){console.log("Server is up")});
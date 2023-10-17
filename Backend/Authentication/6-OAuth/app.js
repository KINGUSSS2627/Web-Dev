const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs  = require("ejs");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20");
const findOrCreate = require("mongoose-findorcreate");
const dotenv = require("dotenv");

dotenv.config();


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
    password : String,
    googleId : String,
    secret : String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User" , userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get("/", (req,res)=>{
    res.render("home");
})

app.get("/auth/google", passport.authenticate("google", {scope : ["profile"]}))

app.get("/auth/google/secrets",
  passport.authenticate('google', { failureRedirect: "/login" }),
  function(req, res) {
    res.redirect('/secrets');
});

app.get("/login", (req,res)=>{
    res.render("login");
})

app.get("/register", (req,res)=>{
    res.render("register");
})

app.get("/secrets", (req,res)=>{
    User.find({"secret":{$ne:null}}, (err, foundUsers)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            if(foundUsers)
            {
                res.render("secrets", {userWithSecrets : foundUsers});  
            }
        }
    });
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

app.get("/submit",(req,res)=>{
    if(req.isAuthenticated())
    {
        res.render("submit");
    }
    else
    {
        res.redirect("/login");
    }
})

app.post("/submit", (req,res)=>{
    const subsecret = req.body.secret;
    User.findById(req.user.id, (err, foundUser)=>{
        if(err)
        {
            console.log(err);
        }
        foundUser.secret = subsecret;
        foundUser.save(()=>{
            res.redirect("/secrets");
        })
    });
})

app.get('/logout', function(req, res, next){
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  });

app.listen(3000 , function(){console.log("Server is up")});
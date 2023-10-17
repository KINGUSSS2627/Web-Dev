const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs  = require("ejs");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.set('strictQuery',true);
mongoose.connect("mongodb://127.0.0.1:27017/wikiDB" ,{useNewUrlParser :true, useUnifiedTopology :true});

const articleSchema = {
    title : String,
    content : String
}

const Article = mongoose.model("article", articleSchema);

app.get("/" ,function(req,res){
    res.send("hi");
})


app.route("/articles")
    .get(function(req,res){
        const article = Article.find({}, function(err,result){
        if(!err)
        {
            res.send(result);
        }
        else
        {
            console.log(err);
        }
    })
    })

    .post(function(req,res){
        const newArticle = new Article({title : req.body.title, content : req.body.content});
        newArticle.save(function(err){
        if(!err)
        {
            res.send("Successfully added new article");
        }
        else
        {
            res.send(err);
        }
    });
    })

    .delete(function(req,res){
        Article.deleteMany({},function(err){
        if(!err)
        {
            res.send("Successfully deleted everything")
        }
        else
        {
            res.send(err);
        }
        })
});

app.route("/articles/:articleTitle")
    .get(function(req,res){
        Article.findOne({title : req.params.articleTitle},function(err,result){
            if(!err)
            {
                if(result)
                {
                    res.send(result);
                }
                else
                {
                    res.send("No Match");
                }
            }
            else
            {
                console.log(err);
            }
        })
    })

    .put(function(req,res){
        Article.replaceOne({title : req.params.articleTitle}, {title : req.body.title, content : req.body.content}, {overwrite : true}, function(err)
        {
            if(!err)
            {
                res.send("Successfully Updated");
            }
        })
    })

    .patch(function(req,res){
        Article.replaceOne({title : req.params.articleTitle}, req.body, function(err){
            if(!err)
            {
                res.send("Successfully update the data segment");
            }
            else
            {
                console.log(err);
            }
        })
    })

    .delete(function(req,res){
        Article.deleteOne({title : req.params.articleTitle},function(err){
            if(!err)
            {
                res.send("Successfully deleted the data");
            }
            else
            {
                console.log(err);
            }
        })
});

app.listen(3000 , function(){console.log("Server is up")});
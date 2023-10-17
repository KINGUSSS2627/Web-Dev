const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

// let date = require(__dirname + "/date.js");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.set('strictQuery',true);
mongoose.connect("mongodb+srv://admin-0:1234@cluster0.lnlf8nt.mongodb.net/toDoListDB" , {useNewUrlParser :true , useUnifiedTopology: true});

const itemSchema = {
    name : String,
};


const Item = mongoose.model("Item",itemSchema);

const item1 = new Item({
    name : "I1"
});
const item2 = new Item({
    name : "I2"
});
const item3 = new Item({
    name : "I3"
});

const defaultArray =[item1, item2, item3];

const listScheme = {
    name :String,
    items :[itemSchema]
}

const List = mongoose.model("List" ,listScheme);

app.get("/", function (req, res) {

    // let day = date.GetDate();

    Item.find({},function(err,result){

        if(result.length === 0)
        {
            Item.insertMany(defaultArray, function(err){
            if(err)
            {
                console.log(err);
                console.log("Error in insertion of default item");
            }
            else
            {
                console.log("Successful insertion of default item")
            }
            })
            res.redirect("/");
        }
        else
        {
            console.log(result);
            res.render("list", { ListTitle: "Today", newItem: result});
        }
    });

});



app.get("/:customListName", function(req,res){

    const customTilte = _.capitalize(req.params.customListName);

    List.findOne({name:customTilte},function(err,foundList){
        if(err)
        {
            console.log(err);
        }
        else
        {
            if(!foundList)
            {
                // Create a new List
                const list = new List({
                    name:customTilte,
                    items :defaultArray
                });

                res.redirect("/" + customTilte);
                list.save();

            }
            else
            {
                // Show existing
                res.render("list",{ ListTitle: foundList.name, newItem: foundList.items})
            }
        }
    })


});




app.post("/", function (req, res) {

    const itemName = req.body.addItem;
    const listName = req.body.list;

    const item = new Item({
        name: itemName
    });

    if(listName === "Today")
    {
        item.save();
        res.redirect("/");
    }
    else
    {
        List.findOne({name :listName}, function(err,foundList){
            foundList.items.push(item);
            foundList.save();
            res.redirect("/" + listName);
        });
    }
});


app.post("/delete",function(req,res){
    const id = req.body.chkbox;
    const listName = req.body.listname;

    if(listName === "Today")
    {
        Item.deleteOne({_id : id} , function(err){
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("Success");
        }
        })
        res.redirect("/");
    }
    else
    {
        List.findOneAndUpdate({name : listName} ,{$pull : {items : {_id : id }}}, function(err,foundList){
            if(err)
            {
                console.log(err);
            }
        });

        res.redirect("/" + listName);
    }




});

app.listen(3000 || process.env.PORT, function () {
    console.log("Server is up");
});




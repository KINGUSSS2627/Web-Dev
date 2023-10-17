const mongoose = require('mongoose');

mongoose.set('strictQuery' ,false);
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({

    name : {
        type:String,
        required :[true,"Check data entry name is not specified"]
    },
    rating : {
        type : Number,
        min : 0,
        max :10
    },
    review : String

});

const Fruit = mongoose.model("Fruit",fruitSchema);

const pineapple = new Fruit({
    name :"pineapple",
    rating : 10,
    review :"Grt"
});

Fruit.updateOne({_id :"64a81fb09ab5adf16cf893a6"} , {name:"->Mango"} ,function(err){
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Success");
    }
})

Fruit.deleteOne({_id:"64a81fb09ab5adf16cf893a6"}, function(err){
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Deleted Successfully");
    }
})

Fruit.deleteMany({name : "apple"},function(err){
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Success");
    }
});
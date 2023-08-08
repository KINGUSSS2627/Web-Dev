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

const orange = new Fruit({

name: "Orange",
rating: 9.2,
review: "Good",

});


const personSchema = new mongoose.Schema({

    name : String,
    age : Number,
    favorite_fruit : fruitSchema

});

const Person = mongoose.model("Person", personSchema);


Person.updateOne({_id : "64a81dc1f7e7f5e22bbd5f8f"}, {favorite_fruit : orange}, function(err){
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("updated");
    }
})

// person.save();
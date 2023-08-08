const mongoose = require('mongoose');

mongoose.set('strictQuery' ,false);
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({

    name : String,
    rating : Number,
    review : String

});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
    name :"Apple",
    rating : 9,
    review :"Good"
});

// fruit.save();

const personSchema = new mongoose.Schema({

    name : String,
    age : Number

});

const Person = mongoose.model("Person", personSchema);

const person = new Person({

    name :"Harsh",
    age:19

});

// person.save();


const orange = new Fruit({
    name :"Orange",
    rating : 9.2,
    review :"Good"
});
const banana = new Fruit({
    name :"Banana",
    rating : 9.75,
    review :"Great"
});

// Fruit.insertMany([orange,banana],function(err){
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log("Successful Addition");
//     }
// });

Fruit.find(function(err,result){
    if(err)
    {
        console.log(err);
    }
    else
    {
        // console.log(result);
        mongoose.connection.close();
        result.forEach(elem => {
            console.log(elem.name);
        });
    }
});
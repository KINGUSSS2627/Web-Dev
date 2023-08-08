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

const fruit = new Fruit({
    rating : 10,
    review :"Good"
});

fruit.save();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { MongoNetworkTimeoutError } = require('mongodb');

const url = "mongodb://127.0.0.1:27017";
const dbName = 'fruitsDB';

const client = new MongoClient(url, { useNewUrlParser: true });

client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected to the server successfully");

    const db = client.db(dbName);

    findDocument(db,function(){
        client.close();
    });

});

const insertDocuments = function(db,callback){

    const collection = db.collection('fruits');
    collection.insertMany([{name:"Apple", rating:4.8},{name:"Guav", rating:4.85},{name:"Banana", rating:4.65}] , function(err, result){

        assert.equal(err,null);
        assert.equal(3,result.insertedCount);
        console.log("Inserted 3 doc into collection");
        callback(result);
    })

}


const findDocument = function(db,callback){

    const collection = db.collection('fruits');
    collection.find({}).toArray(function (err, docs) {
        assert.equal(null, err);
        console.log("Found this");
        console.log(docs);
        callback(docs);
    })
}
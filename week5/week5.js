// QUERY MONGODB

var datetimeStart = new Date();///current date time

var dbName = 'citibike';////
var collName = 'stations';////collection name

// Connection URL
var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;////add db name here

// Retrieve
var MongoClient = require('mongodb').MongoClient;////

MongoClient.connect(url, function(err, db) {////
    if (err) {return console.dir(err);}////////////////

    var collection = db.collection(collName);///////////////////////////////colletion name

    collection.aggregate([{ $limit : 3 }]).toArray(function(err, docs) {/////
        if (err) {console.log(err)}///////
        
        else {//////////////////////
            console.log(docs);/////////////////
        }//////////////////
        db.close();///////////////////////////////////////////////////////////////////////////////
        console.log("This process completed in", new Date() - datetimeStart, "milliseconds.");////////////
        });
});
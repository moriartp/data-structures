// IN THE MONGO SHELL: 
//   CREATE DATABASE citibike AND SWITCH TO IT WITH: 
//      use citibike
//   CREATE COLLECTION stations WITH: 
//      db.createCollection('stations')
//   QUERY THE ENTIRE stations COLLECTION WITH:
//      db.stations.find()
//   COUNT THE NUMBER OF DOCUMENTS IN THE stations COLLECTION WITH:
//      db.stations.find().count()

var request = require('request');
var fs = require('fs');

request('https://raw.githubusercontent.com/moriartp/data-structures/master/week3/aa-latLong.txt', function(error, response, body) {
    var meetingData = JSON.parse(body);

    // Connection URL
    var url = 'mongodb://localhost/:27017/week4';


    // Retrieve
    var MongoClient = require('mongodb').MongoClient; // npm install mongodb

    MongoClient.connect(url, function(err, db) {
        if (err) {return console.dir(err);}

        var collection = db.collection('meetings');

        // THIS IS WHERE THE DOCUMENT(S) IS/ARE INSERTED TO MONGO:
        for (var i=0; i < meetingData.length; i++) {
            collection.insert(meetingData[i]);
            }
        db.close();

    }); //MongoClient.connect

}); //request

// console.log(process.env.IP);
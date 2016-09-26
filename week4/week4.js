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

request('aa-latLong.json', function(error, response, body) {
    var meetingData = JSON.parse(body);

    // Connection URL
    var dataFile = process.env.IP + 'aa-latLong.json';

    // Retrieve
    var MongoClient = require('mongodb').MongoClient; // npm install mongodb

    MongoClient.connect(dataFile, function(err, db) {
        if (err) {return console.dir(err);}

        var collection = db.collection('meetings');

        // THIS IS WHERE THE DOCUMENT(S) IS/ARE INSERTED TO MONGO:
        for (var i=0; i < meetingData.length; i++) {
            collection.insert(meetingData[i]);
            }
        db.close();

    }); //MongoClient.connect

}); //request
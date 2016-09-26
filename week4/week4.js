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

request('aa-latLong.json', function(error, response, body) {
    var meetingData = JSON.parse(body);

    // Connection URL
    var url = 'mongodb://' + process.env.IP + ':27017/aa';
    // var database = process.env.IP + 'week4/aa';
    // var dataFile = fs.readFile('https://raw.githubusercontent.com/moriartp/data-structures/master/week4/aa-latLong.json');

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
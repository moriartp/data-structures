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

request('aa-latLong.txt', function(error, response, body) {
    var AA = JSON.parse(body);

    // Connection URL
    var url = 'mongodb://' + process.env.IP + ':27017/AAMEETINGS';

    // Retrieve
    var MongoClient = require('mongodb').MongoClient; // npm install mongodb

    MongoClient.connect(url, function(err, db) {
        if (err) {return console.dir(err);}

        var collection = db.collection('meeting');

        // THIS IS WHERE THE DOCUMENT(S) IS/ARE INSERTED TO MONGO:
        for (var i=0; i < AA.meetingList.length; i++) {
            collection.insert(AA.meetingList[i]);
            }
        db.close();

    }); //MongoClient.connect

}); //request
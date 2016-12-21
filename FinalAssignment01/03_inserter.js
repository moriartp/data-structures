var request = require('request');
var fs = require('fs');

request('https://raw.githubusercontent.com/moriartp/data-structures/master/week7/output/_10output.txt', function(error, response, body) {
    var meetingData = JSON.parse(body);

    // Connection URL
    var url = 'mongodb://' + process.env.IP + ':27017/aa';


    // Retrieve
    var MongoClient = require('mongodb').MongoClient; // npm install mongodb

    MongoClient.connect(url, function(err, db) {
        if (err) {return console.dir(err);}

        var collection = db.collection('aa_meetings');

        // THIS IS WHERE THE DOCUMENT(S) IS/ARE INSERTED TO MONGO:
        for (var i=0; i < meetingData.length; i++) {
            collection.insert(meetingData[i]);
            }
        db.close();

    }); //MongoClient.connect

}); //request

// console.log(process.env.IP);
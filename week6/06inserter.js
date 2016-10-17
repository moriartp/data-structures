// IN THE MONGO SHELL: 
//   use aa
//   db.createCollection('meetings')


// Require file system module
var fs = require('fs');

// Import and parse output from previous assignment into JSON
var meetingsOutput = fs.readFileSync('/home/ubuntu/workspace/week6/meetingsOutput.txt');
var meetingsData = JSON.parse(meetingsOutput);

// Connection URL
var url = 'mongodb://' + process.env.IP + ':27017/aa';

// Retrieve
var MongoClient = require('mongodb').MongoClient; // npm install mongodb

// MongoClient.connect
MongoClient.connect(url, function(err, db) {
    if (err) { return console.dir(err); }
    var collection = db.collection('meetings');
    // Loop to insert each meeting into the collection
    for (var i = 0; i < meetingsData.length; i++) {
        collection.insert({
            address: meetingsData[i].address,
            latLong: meetingsData[i].latLong,          
            day: meetingsData[i].days,
            startTime: meetingsData[i].start,
            endTime: meetingsData[i].end,
        });
    }
    db.close();
});

//db.meetings.   ...figure out how to remove all
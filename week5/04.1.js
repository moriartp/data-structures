// IN THE MONGO SHELL: 
//   use aa
//   db.createCollection('meetings')

var dbName = 'aa';
var collName = 'meetings';

var starts = ["7:30 AM","7:00 PM","6:00 PM","2:30 PM","7:15 PM","7:00 PM","7:00 PM","6:00 PM","6:30 PM","3:30 PM","6:15 PM","5:00 PM","7:15 AM","9:00 AM","7:30 PM","6:30 PM","8:00 PM","6:15 PM","6:15 PM","12:30 PM","6:30 PM","11:00 AM","7:00 PM","6:30 PM","7:00 PM","7:00 PM","11:00 AM","7:00 PM","3:15 PM","7:00 PM","7:15 PM","9:30 AM","6:30 PM","7:15 PM","9:30 AM","12:30 PM","6:45 PM","11:00 AM","7:00 PM","6:30 PM","6:30 PM","6:00 PM","6:30 PM","6:00 AM","9:15 AM","10:00 AM","10:00 AM","6:30 PM","12:00 PM","7:00 PM","6:15 PM","8:00 PM","8:00 PM"];
var ends = ["8:30 AM","8:00 PM","7:00 PM","3:30 PM","8:15 PM","8:00 PM","8:00 PM","7:00 PM","7:30 PM","4:30 PM","7:15 PM","5:45 PM","8:15 AM","10:00 AM","8:30 PM","7:30 PM","9:00 PM","7:15 PM","7:15 PM","1:30 PM","7:30 PM","12:00 PM","8:00 PM","7:30 PM","8:00 PM","8:00 PM","12:00 PM","8:30 PM","4:15 PM","8:00 PM","8:15 PM","10:30 AM","7:30 PM","8:15 PM","10:30 AM","1:30 PM","7:45 PM","12:00 PM","8:00 PM","7:30 PM","7:30 PM","7:00 PM","7:30 PM","7:00 AM","10:15 AM","11:00 AM","11:00 AM","7:30 PM","1:00 PM","8:00 PM","7:15 PM","9:00 PM","9:00 PM"];
var days = ["Saturday","Tuesday","Wednesday","Monday","Monday","Tuesday","Thursday","Saturday","Friday","Sunday","Tuesday","Sunday","Monday","Sunday","Friday","Friday","Friday","Friday","Monday","Tuesday","Wednesday","Saturday","Monday","Wednesday","Tuesday","Saturday","Thursday","Wednesday","Saturday","Monday","Monday","Wednesday","Monday","Monday","Saturday","Wednesday","Friday","Saturday","Wednesday","Wednesday","Thursday","Monday","Saturday","Tuesday","Saturday","Saturday","Sunday","Saturday","Tuesday","Friday","Wednesday","Thursday","Thursday"];



var fs = require('fs');

// Read the file that contains an array of objects to insert into the "meetings" collection in "aa" in MongoDB
var geocodedMeetingsArray = JSON.parse(fs.readFileSync('/home/ubuntu/workspace/week5/writeFile/meetingsData.txt'));

// Connection URL
var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;

// Retrieve
var MongoClient = require('mongodb').MongoClient; // npm install mongodb

MongoClient.connect(url, function(err, db) {
    if (err) {
        return console.dir(err);
    }

    var collection = db.collection(collName);

    // THIS IS WHERE THE DOCUMENTS ARE INSERTED IN THE meetings COLLECTION IN MONGO:
    // collection.insert(geocodedMeetingsArray);
    collection.update(starts);
    collection.update(ends);
    collection.update(days);
    db.close();
    
}); //MongoClient.connect
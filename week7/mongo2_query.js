var dbName = 'aa';
var collName = 'aa_meetings';

// Connection URL
var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;

// Retrieve
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(url, function(err, db) {
    if (err) {
        return console.dir(err);
    }

    var collection = db.collection(collName);

    collection.aggregate( [

        { $unwind : "$meetingList" },
        
        { $match : { "meetingList.day_index" : 2 } },
        
        { $group : {  _id : { 
            address : "$address",
            geo : "$geo"
        }, 
            day : { $push : "$meetingList.day" },
            startTime : { $push : "$meetingList.startTime" },
            startTimeHour : { $push : "$meetingList.startTimeHour" },
            endTime : { $push : "$meetingList.endTime" },
            endHour : { $push : "$meetingList.endHour" },
            interest : { $push : "$meetingList.interest" }
        }},
        
        { $group : { _id : { geo : "$_id.geo" }, 
                    meetingGroups : { $addToSet : {  meetingGroup : "$_id", 
                                                meetings : {
                                                day : "$day",
                                                startTime : "$startTime",
                                                startHours : "$startHours",
                                                endTime : "$endTime",
                                                endHours : "$endHours",
                                                interest : "$interest"
                                                }
                    } }
                    } }
        
         ]).toArray(function(err, docs) {
        if (err) {console.log(err);}
        else {
            // console.log(JSON.stringify(docs));
            for (var i=0; i < docs.length; i++) {
                console.log(JSON.stringify(docs[i], null, 4));
                console.log('');
            }
        }
        db.close();
        
    });

}); //MongoClient.connect
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
        { $group : { _id : "day_index" } },
        { $match : { "address" : "209 East 16th Street, New York, NY" } },
        { $sort : { "startHours" : 1 } }
        
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

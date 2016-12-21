// QUERY MONGODB

var dbName = 'aa';
var collName = 'aa_meetings';

var http = require("http");
var fs = require("fs");

// Connection URL
var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;

var index1 = fs.readFileSync("index1.txt");
var index3 = fs.readFileSync("index3.txt");

// Retrieve
var MongoClient = require('mongodb').MongoClient;

var server = http.createServer(function(req, res) {

    MongoClient.connect(url, function(err, db) {
        if (err) {return console.dir(err);}
        
        // var dateTimeNow = new Date();
        // var today = dateTimeNow.getDay();
        // var tomorrow;
        // if (today == 6) {tomorrow = 0;}
        // else {tomorrow = today + 1}
        // var hour = dateTimeNow.getHours() - 5;
        var d_ = new Date(); 
    
        var collection = db.collection(collName);
    
        collection.aggregate([ // start of aggregation pipeline
            // match by day and time
            { $match: { $or: [ 
                
                { $and: [
                { "day_index" : d_.getDay() }, 
                { "startHours" : { $gt : d_.getHours() - 5 } }
                 ] },
                { $and: [
                { "day_index": d_.getDay() + 1 }, 
                { "startHours" : { $lt : d_.getHours() - 5 } }
                 ] },
                ] } },
           
           
            { $sort : { day_index : 1, "startHours" : 1 } },

            { 
                $group : 
                    {  
                    // _id : "$address",
                    _id : { site: { address: "$address"}, site_loc: { geo_coor: "$geo"}},
                    meetings_at_site: { $push: { startTime: "$startTime", endTime: "$endTime", interest: "$interest", type: "$type", start_hr: "$startHours", dayString: "$day", day_index: "$day_index" }},
                    // endTime: { $push: {endTime: "$endTime"}},
                    // interest: { $push: {interest: "$interest"}},
                    // type: { $push: {type: "$type"}},
                }
            }
        
            ]).toArray(function(err, docs) { // end of aggregation pipeline
            if (err) {console.log(err)}
            
            else {
                res.writeHead(200, {'content-type': 'text/html'});
                res.write(index1);
                res.write(JSON.stringify(docs));
                res.end(index3);
            }
            db.close();
        });
    });
});

server.listen(process.env.PORT);
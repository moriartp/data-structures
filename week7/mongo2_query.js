var dbName = 'aa';
var collName = 'aa_meetings';
var http = require("http");

// Connection URL
var url = 'mongodb://' + process.env.IP + ':27017/' + dbName;

// Retrieve
var MongoClient = require('mongodb').MongoClient;

var server = http.createServer(function(request, response) {

    MongoClient.connect(url, function(err, db) {
        if (err) {
            return console.dir(err);
        }
        
        var d_ = new Date(); 
        console.log(d_.getDay() + 1 + "D_1");
        console.log(d_.getDay());
    

        var collection = db.collection(collName);


        collection.aggregate( [
            // { $match : { "day_index" : d_.getDay() } },
            { $match : { "day_index" : { $gt : d_.getDay() - 1 , $lt : d_.getDay() + 2 } } },
            // { $match : { "startHours" : { $gt : d_.getHours() - 5 } } },
            
            // {$or : [$match : [{day}, {$gt: time}], [$match : [{day+1}, {$lt: 5}] ]}
            // {$or : [{$match : [{ "day_index" : d_.getDay() }, { "startHours" : { $gt : d_.getHours() - 5 } }}], [$match : [{ "day_index" : d_.getDay()+ }, { "startHours" : { $lt : d_.getHours() - 5 } }]] },
           
            //  {$or: [{expires: {$gte: new Date()}}, {expires: null}]}
            //  {$or: [{ "day_index" : d_.getDay() }, { "day_index" : d_.getDay()+1 }]},
           
           
            { $sort : { "startHours" : 1 } },

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
            // { $sort : { "startHours" : 1 } }
            
             ]).toArray(function(err, docs) {
            if (err) {console.log(err);}
            else {
                // console.log(JSON.stringify(docs));
                // for (var i=0; i < docs.length; i++) {
                    response.writeHead(200, {"Content-Type": "application/json"});
                    response.end(JSON.stringify(docs, null, 4));
                // }
            }
            db.close();
            
        });
    
    }); //MongoClient.connect    
    
    

}); //http.createServer

server.listen(process.env.PORT);
// var http = require('http');
// var fs = require('fs');

// var url = 'mongodb://' + process.env.IP + ':27017/aa';
// var MongoClient = require('mongodb').MongoClient; // npm install mongodb

// var server = http.createServer(function(request, response) {

//     // MongoClient.connect
//     MongoClient.connect(url, function(err, db) {
    
//         if (err) { return console.dir(err); }
        
//         var collection = db.collection('aa_meetings');
        
//     collection.aggregate([ { $match: { address: "351 East 74th Street, New York, NY" } } ])
//         .toArray(function(err, docs) {
//             if (err) { 
//                 console.log(err);
//             } else {
//                 var day = [];
//                 var day_index = [];
//                 var startTime = [];
//                 var startHours = [];
//                 var endTime = [];
//                 var endHours = [];                
                
                
//                 var type = [];
//                 var interest = [];
//                 var meetings = [];
                
//                 for (var i = 0; i < docs.length; i++) {
//                     day.push(docs[i].days);
//                     startTime.push(docs[i].start);
//                     startHours.push(docs[i].type);
//                     endTime.push(docs[i].start);
//                     endHours.push(docs[i].type);                    
//                 }
                
//                 meetings = [{
//                     "_id": {
//                         "geo": docs[0].latLong
//                     },
//                     "meets": [{
//                         "address": docs[0].address
//                     }],
//                     "deets": [{
//                         "day": day,
//                         "day_index": day_index,
//                         "startTime": startTime,
//                         "startHours": startHours,
//                     }]
//                 }];
                
//                 // write file to JSON
//                 fs.writeFileSync('/home/ubuntu/workspace/weekl0/query_output.json', JSON.stringify(meetings));               
//             }
//             db.close();
//         });
//     });

//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.end("engage");

// });

// server.listen(process.env.PORT);
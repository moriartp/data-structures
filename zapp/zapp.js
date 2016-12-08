var pg = require('pg');
var http = require('http');

// connection string
var un = 'pj'; 
var pw = 'amaz0nweb'; 
var db = 'amithere'; 
var ep = 'amithere.cgg6g7zqueog.us-west-2.rds.amazonaws.com'; 
var conString = "postgres://" + un + ":" + pw + "@" + ep + "/" + db;

// var query = "SELECT avg(amount) as avgAmount, EXTRACT(DOW from dateCreated) as dow FROM wham WHERE dateCreated >= '2016-10-31' GROUP BY dow ORDER BY dow;";
var query = "SELECT avg(value_N) as avg_value, hour_N FROM zarduino GROUP BY hour_N ORDER BY hour_N;";

var server = http.createServer(function(req, res) {

    pg.connect(conString, function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
    
        client.query(query, function(err, result) {
            //call `done()` to release the client back to the pool
            done();
    
            if (err) {
                return console.error('error running query', err);
            }
            
            res.writeHead(200, {'content-type': 'application/json'});
            res.end(JSON.stringify(result.rows));

        }); // client.query

    }); // pg.connect

}); // server

server.listen(process.env.PORT); 
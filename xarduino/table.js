var pg = require('pg');

// connection string
var un = 'pj'; 
var pw = 'amaz0nweb'; 
var db = 'amithere'; 
var ep = 'amithere.cgg6g7zqueog.us-west-2.rds.amazonaws.com';
var conString = "postgres://" + un + ":" + pw + "@" + ep + "/" + db;

var createTableQuery = "CREATE TABLE amithere (dateCreated timestamp DEFAULT current_timestamp, status);"//, amount smallint);"
var insertIntoQuery = "INSERT INTO amithere VALUES ('true');"
var query = "SELECT * FROM amithere;"
var complexQuery = "SELECT count(distinct) FROM amithere GROUP BY status;"


pg.connect(conString, function(err, client, done) {
    if (err) {
        return console.error('error fetching client from pool', err);
    }
    console.log("you got this far at least");

    client.query(createTableQuery, function(err, result) {
        //call `done()` to release the client back to the pool
        done();

        if (err) {
            return console.error('error running query, no luck for you', err);
        }
        console.log(result);
    });

});
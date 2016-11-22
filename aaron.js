var pg = require('pg');

// connection string
var un = 'pj'; 
var pw = 'amaz0nweb'; 
var db = 'amithere'; 
var ep = 'amithere.cgg6g7zqueog.us-west-2.rds.amazonaws.com'; 
var conString = "postgres://" + un + ":" + pw + "@" + ep + "/" + db;

//data includes time and status
var createTableQuery = "CREATE TABLE amithere (dateCreated timestamp DEFAULT current_timestamp, status boolean);"
var insertIntoQuery = "INSERT INTO amithere VALUES (DEFAULT, FALSE);"
var status;
var query = "SELECT * FROM amithere;"
var complexQuery = "SELECT count(*) FROM amithere GROUP BY status;"


    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }

      client.query(query, function(err, result) {
        //call `done()` to release the client back to the pool
        done();

        console.log(result);
        if(err) {
          return console.error('error running query', err);
        }
    });
  });

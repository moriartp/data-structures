var pg = require('pg');

// connection string
var un = 'pj'; 
var pw = 'amaz0nweb'; 
var db = 'amithere'; 
var ep = 'amithere.cgg6g7zqueog.us-west-2.rds.amazonaws.com'; 
var conString = "postgres://" + un + ":" + pw + "@" + ep + "/" + db;

//data includes time and status
var createTableQuery = "CREATE TABLE z_table (dateCreated timestamp DEFAULT current_timestamp, status boolean, status_N smallint, hour_N smallint, minute_N smallint);"
var insertIntoQuery = "INSERT INTO z_table VALUES (DEFAULT, FALSE, 0, 9, 30);"
var status;
var status_N;
var Query = "SELECT * FROM z_table;"
var complexQuery = "SELECT count(*) FROM z_table GROUP BY status;"


    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }

      client.query(Query, function(err, result) {
        //call `done()` to release the client back to the pool
        done();

        console.log(result);
        if(err) {
          return console.error('error running query', err);
        }
    });
  });
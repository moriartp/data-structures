var five = require("johnny-five"), bumper, led;
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
var hour_N;
var minute_N;
var Query = "SELECT * FROM z_table;"
var complexQuery = "SELECT count(*) FROM z_table GROUP BY status;"

five.Board().on("ready", function() {

  var spdt = new five.Switch(2);
  var led = new five.Led(13);

  spdt.on("open", function() {
    var d = new Date();
    led.on();
    console.log("I AM 'IN' ");
    var insertIntoQuery = 'INSERT INTO mia VALUES (DEFAULT, true, 1);'
    console.log(insertIntoQuery);
    console.log("Line 29 reporting for duty");

    //_______INIT_DB_CONNECTION_AND_INSERT_DATA_________________________________________________
    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      console.log("Line 36 reporting for duty");
      client.query(insertIntoQuery, function(err, result) {
        //call `done()` to release the client back to the pool
        done();
        console.log("Line 40 -- the result should appear below -- INSERT INTO mia VALUES (DEFAULT, true, 1)");
        console.log(result);

        if(err) {
          return console.error('error running query', err);
        }
      });
    });
    //_______WRAP_DB_CONNECTION_AND_INSERT_DATA_________________________________________________   
  });

  spdt.on("close", function() {
    var d = new Date();
    led.off();
    console.log("I AM 'OUT'");
    var insertIntoQuery = 'INSERT INTO mia VALUES (DEFAULT, false, 0);'
    console.log(insertIntoQuery);
    console.log("Line 61 reporting for duty");

    //_______INIT_DB_CONNECTION_AND_INSERT_DATA_________________________________________________
    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      console.log("Line 68 reporting for duty");
      client.query(insertIntoQuery, function(err, result) {
        //call `done()` to release the client back to the pool
        done();
        console.log("Line 72 -- the result should appear below --INSERT INTO mia VALUES (DEFAULT, false, 0)");

        console.log(result);

        if(err) {
          return console.error('error running query', err);
        }
      });
    });
    //_______WRAP_DB_CONNECTION_AND_INSERT_DATA_________________________________________________
  });
});
var five = require("johnny-five"), bumper, led;
var pg = require('pg');

// connection string
var un = ''; 
var pw = ''; 
var db = ''; 
var ep = 'amithere.cgg6g7zqueog.us-west-2.rds.amazonaws.com'; 
var conString = "postgres://" + un + ":" + pw + "@" + ep + "/" + db;

//data includes time and speed, could be used to calc acceleration later
var createTableQuery = "CREATE TABLE amithere (dateCreated timestamp DEFAULT current_timestamp, status);"
var insertIntoQuery = "INSERT INTO amithere VALUES (DEFAULT, true);"
var query = "SELECT * FROM amithere;"
var complexQuery = "SELECT count(*) FROM amithere GROUP BY status;"

five.Board().on("ready", function() {

  var spdt = new five.Switch(2);
  var led = new five.Led(13);

  spdt.on("open", function() {
    led.on();
    console.log("I AM 'IN'");
    var status = true;
    var insertIntoQuery = insertIntoQuery = 'INSERT INTO amithere VALUES (DEFAULT, '+status+');'
  });

  spdt.on("close", function() {
    led.off();
    console.log("I AM 'OUT'");
    var status = false;
    var insertIntoQuery = insertIntoQuery = 'INSERT INTO amithere VALUES (DEFAULT, '+status+');'

  });
  // var insertIntoQuery = insertIntoQuery = 'INSERT INTO amithere VALUES (DEFAULT, '+status+');'

    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }

      client.query(insertIntoQuery, function(err, result) {
        //call `done()` to release the client back to the pool
        done();

        if(err) {
          return console.error('error running query', err);
        }
    });
  });
});
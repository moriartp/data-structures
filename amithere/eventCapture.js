var five = require("johnny-five"), bumper, led;
var pg = require('pg');

// connection string
var un = 'pj'; 
var pw = 'amaz0nweb'; 
var db = 'amithere'; 
var ep = 'amithere.cgg6g7zqueog.us-west-2.rds.amazonaws.com'; 
var conString = "postgres://" + un + ":" + pw + "@" + ep + "/" + db;

//data includes time and speed, could be used to calc acceleration later
var createTableQuery = "CREATE TABLE amithere (dateCreated timestamp DEFAULT current_timestamp, status);"
var insertIntoQuery = "INSERT INTO amithere VALUES (DEFAULT, 0);"
var query = "SELECT * FROM amithere;"
var complexQuery = "SELECT count(*) FROM amithere GROUP BY status;"



five.Board().on("ready", function() {

  var spdt = new five.Switch(2);
  var led = new five.Led(13);

  spdt.on("open", function() {
    var d = new Date();
    led.on();

    console.log("___________________________");
    console.log("I AM 'IN' ");
    console.log("STATUS: "+true);
    var status = true;
   //Date//
    var date = new Date();
    var calYear = (d.getYear()+1900);
    console.log("YEAR: " + calYear );
    console.log("MONTH: "+(d.getMonth()<10?'0':'') +d.getMonth());
    console.log("DATE: "+(d.getDate()<10?'0':'') +d.getDate());
    console.log("DAY: "+d.getDay());
    //TOD//
    console.log("TOD: "+  ((d.getHours()<10?'0':'') + d.getHours())+":"+((d.getMinutes()<10?'0':'') + d.getMinutes())+":"+((d.getSeconds()<10?'0':'') + d.getSeconds()) );
    console.log("HRS: "+(d.getHours()<10?'0':'') + d.getHours());
    console.log("MIN: "+(d.getMinutes()<10?'0':'') + d.getMinutes());
    console.log("SEC: "+(d.getSeconds()<10?'0':'') + d.getSeconds());
    console.log("___________________________");

    var insertIntoQuery = insertIntoQuery = 'INSERT INTO amithere VALUES (DEFAULT, '+status+');'
  });

  spdt.on("close", function() {
    var d = new Date();
    led.off();

    console.log("___________________________");
    console.log("I AM 'OUT'");
    console.log("STATUS: "+false);
    var status = false;
   //Date//
    var date = new Date();
    var calYear = (d.getYear()+1900);
    console.log("YEAR: " + calYear );
    console.log("MONTH: "+(d.getMonth()<10?'0':'') +d.getMonth());
    console.log("DATE: "+(d.getDate()<10?'0':'') +d.getDate());
    console.log("DAY: "+d.getDay());
    //TOD//
    console.log("TOD: "+  ((d.getHours()<10?'0':'') + d.getHours())+":"+((d.getMinutes()<10?'0':'') + d.getMinutes())+":"+((d.getSeconds()<10?'0':'') + d.getSeconds()) );
    console.log("HRS: "+(d.getHours()<10?'0':'') + d.getHours());
    console.log("MIN: "+(d.getMinutes()<10?'0':'') + d.getMinutes());
    console.log("SEC: "+(d.getSeconds()<10?'0':'') + d.getSeconds());
    console.log("___________________________");

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
        
        console.log(result);

        if(err) {
          return console.error('error running query', err);
        }
    });
  });
});
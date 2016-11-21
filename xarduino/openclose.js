var five = require("johnny-five");
var board = new five.Board();

var d = new Date();

board.on("ready", function() {
  var spdt = new five.Switch(2);
  var led = new five.Led(13);

  // spdt.on("data", function() {
  // 	var d = new Date();
  // 	if(led.off()){
  // 		console.log(true);
  // 	} else {
  // 		console.log(false);
  // 		}
  // freq: 100;

	 //  })
  spdt.on("open", function() {
  	var d = new Date();
    led.on();

    ///////////////////////values///////////////
    console.log("_______________");
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

   //  ///////////////////////values ONLY///////////////
   //  console.log("_____VALUES_ONLY_____");
   //  console.log("IN " + new Date());
   //  console.log(true);
   // //Date//
   //  console.log(d.getYear()+1900);
   //  console.log((d.getMonth()<10?'0':'') +d.getMonth());
   //  console.log((d.getDate()<10?'0':'') +d.getDate());
   //  console.log(d.getDay());
   //  //TOD//
   //  console.log(	((d.getHours()<10?'0':'') + d.getHours())+":"+((d.getMinutes()<10?'0':'') + d.getMinutes())+":"+((d.getSeconds()<10?'0':'') + d.getSeconds())	);
   //  console.log((d.getHours()<10?'0':'') + d.getHours());
   //  console.log((d.getMinutes()<10?'0':'') + d.getMinutes());
   //  console.log((d.getSeconds()<10?'0':'') + d.getSeconds());
   //  console.log("_____END_RECORD_____");
   //  console.log("                    ");
  });

  spdt.on("close", function() {
    var d = new Date();
    led.off();

    ///////////////////////values///////////////
    console.log("_______________");
    console.log("I AM 'OUT' ");
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

   //  ///////////////////////values ONLY///////////////
   //  console.log("_____VALUES_ONLY_____");
   //  console.log("OUT " + new Date());
   //  console.log(false);
   // //Date//
   //  console.log(d.getYear()+1900);
   //  console.log((d.getMonth()<10?'0':'') +d.getMonth());
   //  console.log((d.getDate()<10?'0':'') +d.getDate());
   //  console.log(d.getDay());
   //  //TOD//
   //  console.log(  ((d.getHours()<10?'0':'') + d.getHours())+":"+((d.getMinutes()<10?'0':'') + d.getMinutes())+":"+((d.getSeconds()<10?'0':'') + d.getSeconds()) );
   //  console.log((d.getHours()<10?'0':'') + d.getHours());
   //  console.log((d.getMinutes()<10?'0':'') + d.getMinutes());
   //  console.log((d.getSeconds()<10?'0':'') + d.getSeconds());
   //  console.log("_____END_RECORD_____");
   //  console.log("                    ");


  });
});
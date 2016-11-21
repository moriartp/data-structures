//  http://johnny-five.io/examples/tinkerkit-tilt/

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // var servo = new five.Servo("O0");

  new five.Sensor("I2").on("change", function() {
  	var d = new Date();
  	
  	// if (d.getSeconds() === 0){
	    console.log(this.boolean + " " + new Date());

  	// }
  });
});
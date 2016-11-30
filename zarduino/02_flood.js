var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // var servo = new five.Servo("O0");
  new five.Sensor("I2").on("change", function() {
  	freq: 1;

    console.log(this.boolean + " " + new Date());
    freq: 1;
  	});
});
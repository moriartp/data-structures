var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var tilt = new five.Sensor.Digital(2);

  tilt.on("change", function() {
    if (this.value) {
      console.log(1 + " " + new Date());
    }
  });
});
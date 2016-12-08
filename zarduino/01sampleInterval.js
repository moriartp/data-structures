var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
	var date = new Date();

    var inOut = new five.Sensor({
        pin: 2, 
        freq: 60000
    });
    
    inOut.on('data', function() {
        // write/INSERT this row to my database
        // pg.connect
    }
    );    
});
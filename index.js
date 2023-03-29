

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", ()=>{
    var led = new five.Led(13);
    led.blink(1000);
})
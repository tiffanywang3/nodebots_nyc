/*
 * In this step we will output the value of a potentiometer to the
 * console.
 */

var five = require("johnny-five");
var myBoard = new five.Board();

myBoard.on("ready", function() {

    var rgb = new five.Led.RGB({
        pins: {
            red: 11,
            green: 10,
            blue: 9
        }
    });

    var pmeter = new five.Sensor("A0");

    pmeter.on("change", function() {
        console.log("The value of the potentiometer is:" +this.value );
        //Add code here to make the RBG sensor turn green when potentiometer value>500
        //Use APIS--> http://johnny-five.io/api/led.rgb/ and http://johnny-five.io/api/sensor/
    });
});


//Video with the button pressed the external LED lights up
let buttonPressed: boolean = 0
pins.digitalWritePin(DigitalPin.P0, 0)// Pins im using
pins.digitalWritePin(DigitalPin.P1, 0)
basic.forever(function () {
    
    if (pins.analogReadPin(AnalogPin.P0) > 700) {
        if (buttonPressed == 0) {
            buttonPressed += 1
            if (buttonPressed == 1) {
                pins.digitalWritePin(DigitalPin.P1, 1)
            } // This allows me to switch the button on and turn the pin on to fire the LED
        }
    } else {
        if (buttonPressed == 1) {
            buttonPressed += -1
            if (buttonPressed == 0) {
                pins.digitalWritePin(DigitalPin.P1, 0)
            } // this allows me to switch the botton off and turn off the pin that fires he LED
        }
    }
})
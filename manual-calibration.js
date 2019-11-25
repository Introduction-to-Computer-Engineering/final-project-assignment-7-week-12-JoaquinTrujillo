
let soilMoisture: number = 0
function graphMoisture() {
    //Allows me to map the readings on the sensor
    if (Math.round(Math.map(soilMoisture, 0, 810, 0, 4)) == 4) {
        basic.showLeds(`
            . . . . .
            . . . # #
            . . # # #
            . # # # #
            # # # # #
            `)
    } else if (Math.round(Math.map(soilMoisture, 0, 810, 0, 4)) == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # #
            . . # # #
            . # # # #
            `)
    } else if (Math.round(Math.map(soilMoisture, 0, 810, 0, 4)) == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . # #
            . . # # #
            `)
    } else if (Math.round(Math.map(soilMoisture, 0, 810, 0, 4)) == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . # #
            `)
    } else if (Math.round(Math.map(soilMoisture, 0, 810, 0, 4)) == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
}
//When button A is pressed it allows for a reading
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(1000)
    soilMoisture = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    graphMoisture()
})

basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(1000)
    soilMoisture = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    graphMoisture()
    basic.pause(2000)
    serial.writeNumber(soilMoisture)//gives the reading
}) 
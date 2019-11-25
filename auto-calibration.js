let highValue: number = 0
let highValueOne: number = 0
let highValueTwo: number = 0
let highValueThree: number = 0
let lowValue: number = 0
let lowValueOne: number = 0
let lowValueTwo: number = 0
let lowValueThree: number = 0
let sensorReading: number = 0
let soilMoisture: number = 0
pins.digitalWritePin (DigitalPin. P8, 0) //setting up my variables to store my readings, to keep track of my readings, to show my sensor readings, and get an average

function sensorCalibration (){
 while (sensorReading < 6){
     if (sensorReading == 0){
if (input.buttonIsPressed(Button.A)){
    sensorReading = 1
    pins.digitalWritePin(DigitalPin. P8, 1)
    highValueOne = pins.analogReadPin(AnalogPin. P0)
    pins.digitalWritePin(DigitalPin. P8, 0)
    basic.showString ("!")
    basic.pause (500)
    basic.clearScreen ()
}
    basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    . . # . .
    . . # . . 
    `)
 }
 if (sensorReading == 1){
     if (input.buttonIsPressed(Button.A)){
         sensorReading = 2
         pins.digitalWritePin(DigitalPin. P8, 1)
         highValueTwo = pins.analogReadPin(AnalogPin. P0)
         pins.digitalWritePin(DigitalPin. P8, 0)
         basic.showString ("!")
         basic.pause(500)
         basic.clearScreen()
     }
     basic.showLeds(`
     . . # . .
     . # # # .
     # # # # # 
     . . # . .
     . . # . .
     `)
 }
 if (sensorReading == 2){
     if(input.buttonIsPressed(Button.A)){
     sensorReading = 3
     pins.digitalWritePin(DigitalPin. P8, 1)
     highValueThree = pins.analogReadPin(AnalogPin.P0)
     pins.digitalWritePin(DigitalPin. P8, 0)
     basic.showString("!")
     basic.pause(500)
     basic.clearScreen()
    }
    basic.showLeds (`
 . . # . .
 . # # # .
 # # # # #
 . . # . .
 . . # . .
 `)
 }// hour first three readings on high reads on the press of button A takes a reading shows the reading in a variable shows a ! to confirm it was read and shows LEDs for the next reading

    if (sensorReading == 3){
if (input.buttonIsPressed(Button.A)){
    sensorReading = 4
    pins.digitalWritePin(DigitalPin. P8 , 1)
    lowValueOne = pins.analogReadPin (AnalogPin. P0)
    pins.digitalWritePin(DigitalPin. P8, 0)
    basic.showString("!")
    basic.pause (500)
    basic.clearScreen ()
}
basic.showLeds(`
. . # . .
. . # . .
# # # # # 
. # # # . 
. . # . .
`)
    }
    if(input.buttonIsPressed(Button.A)){
        if (sensorReading == 4){
            sensorReading = 5
            pins.digitalWritePin(DigitalPin. P8, 1)
            lowValueTwo = pins.analogReadPin(AnalogPin.P0)
            pins.digitalWritePin(DigitalPin. P8, 0)
            basic.showString("!")
            basic.pause(500)
            basic.clearScreen ()
        }
basic.showLeds (`
. . # . .
. . # . .
# # # # #
. # # # . 
. . # . .
`)
    }
    if(input.buttonIsPressed(Button.A)){
        if(sensorReading == 5){
            sensorReading = 6
            pins.digitalWritePin(DigitalPin. P8, 1)
            lowValueThree = pins.analogReadPin(AnalogPin.P0)
            pins.digitalWritePin(DigitalPin. P8, 0)
            basic.showString("!")
            basic.pause(500)
            basic.clearScreen()
        }
        basic.showLeds (`
. . # . .
. . # . .
# # # # #
. # # # . 
. . # . .
`)
    }
} // last three values stored low
}
if(sensorReading == 6){ //stoping point for calibration and averages the numbers recorded
    basic.showString("CalibrationComplete")
    highValue = (highValueOne + highValueTwo + highValueThree) / 3
    lowValue = (lowValueOne + lowValueTwo + lowValueThree) / 3
}

//graphs the sensor readings based on the calibration
function graphMoisture() {
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
input.onButtonPressed(Button.B, function () {
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
    serial.writeNumber(soilMoisture)
}) 
//starts the calibration over by pressing A+B 
input.onButtonPressed(Button.AB, function () {
    sensorReading = 0
    sensorCalibration()
})
//enable the MicroBit LED board
led.enable(true)//Enabling Matrix
pins.analogWritePin(AnalogPin.P16, 0)//changing pins for LEDs
pins.analogWritePin(AnalogPin.P12, 0)//changing pins for LEDs
pins.analogWritePin(AnalogPin.P8, 0)//changing pins for LEDs
basic.forever(function () {
    for (let index = 0; index <= 3071; index++) {
        if (index < 2046) {
            if (index <= 1023) {
                pins.analogWritePin(AnalogPin.P16, index)
            } else {
                pins.analogWritePin(AnalogPin.P16, 1023 - (index - 1023))
            }
        } else {
            pins.analogWritePin(AnalogPin.P16, 0)
        }
        if (index > 1023) {
            if (index <= 2046) {
                pins.analogWritePin(AnalogPin.P12, index - 1023)
            } else {
                pins.analogWritePin(AnalogPin.P12, 1023 - (index - 2047))
            }
        } else {
            pins.analogWritePin(AnalogPin.P12, 0)
        }
        if (index < 1023) {
            pins.analogWritePin(AnalogPin.P8, 1022 - index)
        } else if (index > 2048) {
            pins.analogWritePin(AnalogPin.P8, index - 2048)
        } else {
            pins.analogWritePin(AnalogPin.P8, 0)
        }
        
        control.waitMicros(1000)
    }
    led.plot(2,2)
    basic.pause(1000)
    led.unplot(2,2)
    basic.pause(1000)
})

// Video with external LEDs and MicroBit LEDS
led.enable(true)// LED enabled to work my screensave while i light the LEDs
const speed = 80
pins.analogWritePin(AnalogPin.P16, 0)
pins.analogWritePin(AnalogPin.P12, 0)
pins.analogWritePin(AnalogPin.P8, 0)
basic.forever(function () {

    led.plot(0, 0)
    basic.pause(speed)
    led.plot(1, 0)
    led.plotBrightness(1, 0, 200)
    basic.pause(speed)
    led.plot(2, 0)
    led.plotBrightness(2, 0, 70)
    basic.pause(speed)
    led.plot(3, 0)
    led.plotBrightness(3, 0, 20)
    basic.pause(speed)
    led.plot(4, 0)
    led.plotBrightness(4, 0, 3)
    basic.pause(speed)

    //line2
    led.plot(4, 1)
    basic.pause(speed)
    led.plot(3, 1)
    led.plotBrightness(3, 1, 200)
    basic.pause(speed)
    led.plot(2, 1)
    led.plotBrightness(2, 1, 70)
    basic.pause(speed)
    led.plot(1, 1)
    led.plotBrightness(1, 1, 20)
    basic.pause(speed)
    led.plot(0, 1)
    led.plotBrightness(0, 1, 3)
    basic.pause(speed)

    //line3
    led.plot(0, 2)
    basic.pause(speed)
    led.plot(1, 2)
    led.plotBrightness(1, 2, 200)
    basic.pause(speed)
    led.plot(2, 2)
    led.plotBrightness(2, 2, 70)
    basic.pause(speed)
    led.plot(3, 2)
    led.plotBrightness(3, 2, 20)
    basic.pause(speed)
    led.plot(4, 2)
    led.plotBrightness(4, 2, 3)
    basic.pause(speed)

    //line4
    led.plot(4, 3)
    basic.pause(speed)
    led.plot(3, 3)
    led.plotBrightness(3, 3, 200)
    basic.pause(speed)
    led.plot(2, 3)
    led.plotBrightness(2, 3, 70)
    basic.pause(speed)
    led.plot(1, 3)
    led.plotBrightness(1, 3, 20)
    basic.pause(speed)
    led.plot(0, 3)
    led.plotBrightness(0, 3, 3)
    basic.pause(speed)

    //line5
    led.plot(0, 4)
    basic.pause(speed)
    led.plot(1, 4)
    led.plotBrightness(1, 4, 200)
    basic.pause(speed)
    led.plot(2, 4)
    led.plotBrightness(2, 4, 70)
    basic.pause(speed)
    led.plot(3, 4)
    led.plotBrightness(3, 4, 20)
    basic.pause(speed)
    led.plot(4, 4)
    led.plotBrightness(4, 4, 3)
    basic.pause(speed)

    //reversing
    led.unplot(4, 4)
    basic.pause(speed)
    led.unplot(3, 4)
    basic.pause(speed)
    led.unplot(2, 4)
    basic.pause(speed)
    led.unplot(1, 4)
    basic.pause(speed)
    led.unplot(0, 4)
    basic.pause(speed)

    //line2
    led.unplot(0, 3)
    basic.pause(speed)
    led.unplot(1, 3)
    basic.pause(speed)
    led.unplot(2, 3)
    basic.pause(speed)
    led.unplot(3, 3)
    basic.pause(speed)
    led.unplot(4, 3)
    basic.pause(speed)

    //line3
    led.unplot(4, 2)
    basic.pause(speed)
    led.unplot(3, 2)
    basic.pause(speed)
    led.unplot(2, 2)
    basic.pause(speed)
    led.unplot(1, 2)
    basic.pause(speed)
    led.unplot(0, 2)
    basic.pause(speed)

    //line4
    led.unplot(0, 1)
    basic.pause(speed)
    led.unplot(1, 1)
    basic.pause(speed)
    led.unplot(2, 1)
    basic.pause(speed)
    led.unplot(3, 1)
    basic.pause(speed)
    led.unplot(4, 1)
    basic.pause(speed)

    //line5
    led.unplot(4, 0)
    basic.pause(speed)
    led.unplot(3, 0)
    basic.pause(speed)
    led.unplot(2, 0)
    basic.pause(speed)
    led.unplot(1, 0)
    basic.pause(speed)
    led.unplot(0, 0)
    basic.pause(speed)
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
})

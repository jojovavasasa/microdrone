let group = 2
radio.setGroup(2)
while (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
    if (input.buttonIsPressed(Button.A)) {
        group = 0
        basic.showLeds(`
            # # . # #
            # # # # #
            . # # # .
            # # # # #
            # # . # #
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (input.buttonIsPressed(Button.B)) {
        group = 1
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            # . . . #
            `)
        basic.pause(100)
        basic.clearScreen()
    } else {
    	
    }
}
basic.forever(function () {
    if (group == 0) {
    	
    } else if (group == 1) {
    	
    } else {
    	
    }
})

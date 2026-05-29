enum RadioMessage {
    message1 = 49434,
    searching = 45101,
    found = 41662
}
radio.onReceivedMessage(RadioMessage.found, function () {
    if (group == 0) {
        connected = 1
    } else {
    	
    }
})
radio.onReceivedMessage(RadioMessage.searching, function () {
    if (group == 1) {
        radio.sendMessage(RadioMessage.found)
        connected = 1
    } else {
    	
    }
})
let connected = 0
let group = 0
group = 2
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
    while (connected == 0) {
        if (group == 0) {
            radio.sendMessage(RadioMessage.searching)
        } else {
        	
        }
    }
})

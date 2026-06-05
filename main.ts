enum RadioMessage {
    message1 = 49434,
    searching = 45101,
    found = 41662
}
/**
 * 0 = Drone
 * 
 * 1 = Remote
 */
radio.onReceivedValue(function (name, value) {
    if (group == 0 && connected == 1) {
        if (name == "Throttle") {
            Throttle = value
        } else if (name == "Yaw") {
            Yaw = value
        } else if (name == "Pitch") {
            Pitch = value
        } else if (name == "Roll") {
            Roll = value
        } else if (name == "Arm") {
            Arm = value
        }
    } else {
    	
    }
})
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
let Arm = 0
let Roll = 0
let Pitch = 0
let Yaw = 0
let Throttle = 0
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
            # . . . #
            # # # # #
            # # # # #
            # # . # #
            # . . . #
            `)
        basic.pause(100)
        basic.clearScreen()
    } else {
    	
    }
}
basic.forever(function () {
    if (group == 0 && connected == 1) {
        // drone loop
        while (true) {
            AirBit.FlightControl(
            Throttle,
            Yaw,
            Pitch,
            Roll,
            Arm,
            0,
            0
            )
        }
    } else if (group == 1 && connected == 1) {
        // remote loop
        while (true) {
            radio.sendValue("Throttle", 0)
            radio.sendValue("Yaw", 0)
            radio.sendValue("Pitch", 0)
            radio.sendValue("Roll", 0)
            radio.sendValue("Arm", 0)
        }
    } else {
    	
    }
})
basic.forever(function () {
    while (connected == 0) {
        if (group == 0) {
            radio.sendMessage(RadioMessage.searching)
        } else {
        	
        }
    }
})

group = 2
radio.set_group(2)
while not (input.button_is_pressed(Button.A) or input.button_is_pressed(Button.B)):
    if input.button_is_pressed(Button.A):
        group = 0
        basic.show_leds("""
            # # . # #
            # # # # #
            . # # # .
            # # # # #
            # # . # #
            """)
        basic.pause(100)
        basic.clear_screen()
    else:
        group = 1
        basic.show_leds("""
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            # . . . #
            """)
        basic.pause(100)
        basic.clear_screen()

def on_forever():
    if group == 0:
        pass
    elif group == 1:
        pass
    else:
        pass
basic.forever(on_forever)

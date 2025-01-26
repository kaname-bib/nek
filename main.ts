basic.forever(function () {
    from microbit import *

# "Hello, World!"をLEDディスプレイに表示
    display.scroll("Hello, World!")

# 無限ループでAボタンが押されたらハートを表示
    while True:
        if button_a.was_pressed():
            display.show(Image.HEART)
    sleep(100)
})

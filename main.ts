input.onButtonPressed(Button.A, function () {
    bitbot.go(BBDirection.Forward, 100)
    bitbot.ledRainbow()
})
input.onButtonPressed(Button.AB, function () {
    bitbot.stop(BBStopMode.Brake)
    bitbot.buzz(true)
})
input.onButtonPressed(Button.B, function () {
    bitbot.stop(BBStopMode.Coast)
    bitbot.buzz(false)
})
music.playMelody("C D E F G A B C5 ", 120)
bitbot.setLedColor(0x00FF00)
basic.showString("READY TO GO!")
basic.showIcon(IconNames.SmallSquare)
basic.forever(function () {
	
})

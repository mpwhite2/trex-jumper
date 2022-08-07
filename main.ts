input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.Y, -1)
    basic.pause(700)
    player.change(LedSpriteProperty.Y, 1)
})
let cactus: game.LedSprite = null
let player: game.LedSprite = null
basic.pause(1000)
player = game.createSprite(1, 4)
if (game.isGameOver() && input.buttonIsPressed(Button.AB)) {
    control.reset()
}
basic.forever(function () {
    cactus = game.createSprite(4, 4)
    // move cactus
    while (cactus.get(LedSpriteProperty.X) > 0) {
        cactus.change(LedSpriteProperty.X, -1)
        basic.pause(300)
    }
    cactus.delete()
    game.addScore(1)
})
basic.forever(function () {
    if (player.isTouching(cactus)) {
        game.gameOver()
    }
})

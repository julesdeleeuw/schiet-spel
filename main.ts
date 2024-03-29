input.onButtonPressed(Button.A, function on_button_pressed_a() {
    SHIP.move(-1)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    SHOOT = game.createSprite(SHIP.get(LedSpriteProperty.X), SHIP.get(LedSpriteProperty.Y))
    SHOOT.change(LedSpriteProperty.Brightness, 80)
    for (let index = 0; index < 4; index++) {
        SHOOT.change(LedSpriteProperty.Y, -1)
        basic.pause(150)
        if (SHOOT.isTouching(ENEMY)) {
            soundExpression.happy.play()
            game.setScore(1)
            SHOOT.delete()
            ENEMY.delete()
        }
        
    }
    if (SHOOT.get(LedSpriteProperty.Y) <= 0) {
        SHOOT.delete()
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    SHIP.move(1)
})
let ENEMY : game.LedSprite = null
let SHOOT : game.LedSprite = null
let SHIP : game.LedSprite = null
SHIP = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function on_forever() {
    
    ENEMY = game.createSprite(randint(0, 4), 0)
    ENEMY.set(LedSpriteProperty.Brightness, 150)
    basic.pause(100)
    ENEMY.turn(Direction.Right, 90)
    for (let index2 = 0; index2 < 4; index2++) {
        ENEMY.move(1)
        basic.pause(100)
        if (ENEMY.isTouching(SHIP)) {
            game.gameOver()
        }
        
    }
    if (ENEMY.isTouchingEdge()) {
        ENEMY.delete()
    }
    
})

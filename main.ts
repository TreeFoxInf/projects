namespace SpriteKind {
    export const ball = SpriteKind.create()
    export const playerOne = SpriteKind.create()
    export const playerTwo = SpriteKind.create()
    export const Goal = SpriteKind.create()
    export const Goal2 = SpriteKind.create()
}
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    Ham.vy = -130
})
sprites.onOverlap(SpriteKind.Goal2, SpriteKind.ball, function (sprite, otherSprite) {
    info.player2.changeLifeBy(-1)
    pause(1000)
    mySprite2.vx = 50
    mySprite2.setPosition(80, 60)
})
sprites.onOverlap(SpriteKind.playerOne, SpriteKind.ball, function (sprite, otherSprite) {
    speed += 1
    mySprite2.vx = 25 + speed
})
sprites.onOverlap(SpriteKind.Goal, SpriteKind.ball, function (sprite, otherSprite) {
    info.player1.changeLifeBy(-1)
    pause(1000)
    mySprite2.vx = 50
    mySprite2.setPosition(80, 60)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    mySprite3.vy = -130
})
function map () {
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.setTileAt(tiles.getTileLocation(2, 6), assets.tile`myTile0`)
    tiles.setTileAt(tiles.getTileLocation(3, 6), assets.tile`myTile0`)
    tiles.setTileAt(tiles.getTileLocation(4, 6), assets.tile`myTile0`)
    tiles.setTileAt(tiles.getTileLocation(5, 6), assets.tile`myTile0`)
    tiles.setTileAt(tiles.getTileLocation(6, 6), assets.tile`myTile0`)
    tiles.setTileAt(tiles.getTileLocation(7, 6), assets.tile`myTile0`)
    tiles.setTileAt(tiles.getTileLocation(1, 6), assets.tile`myTile0`)
    tiles.setTileAt(tiles.getTileLocation(0, 6), assets.tile`myTile0`)
    tiles.setTileAt(tiles.getTileLocation(8, 6), assets.tile`myTile0`)
    tiles.setTileAt(tiles.getTileLocation(9, 6), assets.tile`myTile0`)
    tiles.setTileAt(tiles.getTileLocation(9, 7), assets.tile`myTile`)
    tiles.setTileAt(tiles.getTileLocation(8, 7), assets.tile`myTile`)
    tiles.setTileAt(tiles.getTileLocation(0, 7), assets.tile`myTile`)
    tiles.setTileAt(tiles.getTileLocation(1, 7), assets.tile`myTile`)
    tiles.setTileAt(tiles.getTileLocation(2, 7), assets.tile`myTile`)
    tiles.setTileAt(tiles.getTileLocation(3, 7), assets.tile`myTile`)
    tiles.setTileAt(tiles.getTileLocation(4, 7), assets.tile`myTile`)
    tiles.setTileAt(tiles.getTileLocation(5, 7), assets.tile`myTile`)
    tiles.setTileAt(tiles.getTileLocation(6, 7), assets.tile`myTile`)
    tiles.setTileAt(tiles.getTileLocation(7, 7), assets.tile`myTile`)
}
info.player1.onLifeZero(function () {
    game.setGameOverMessage(true, "p2 Wins")
    game.gameOver(true)
})
info.player2.onLifeZero(function () {
    game.setGameOverMessage(true, "p1 Wins")
    game.gameOver(true)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . e 2 2 2 2 2 . . . . . . 
        . . . e 2 2 d 2 2 2 2 . . . . . 
        . . . e 2 2 2 2 2 2 2 e . . . . 
        . . . e 2 2 2 2 2 2 2 e . . . . 
        . c c f f e 2 2 2 2 2 e . . . . 
        . c b f f f f e 2 2 e e . . . . 
        . c d f f f f e e f e e e . . . 
        . c b c 4 4 b c f d 2 2 e e . . 
        . . . c 4 1 1 4 c b 2 2 e e . . 
        . . . c 4 4 4 4 c e b 1 1 b . . 
        . . . c b 4 4 4 d d f f f f . . 
        . . . . c c c c d d f f f f f f 
        . . . . . c c c f f f f . f f f 
        . . . . . . . e e e . . . . f f 
        . . . . . . e e e e . . . . . . 
        `, SpriteKind.playerTwo)
    mySprite3.ay = 200
    controller.player2.moveSprite(mySprite3, 100, 0)
    mySprite3.setPosition(150, 2)
    info.player2.setLife(5)
})
sprites.onOverlap(SpriteKind.playerTwo, SpriteKind.ball, function (sprite, otherSprite) {
    speed += 1
    mySprite2.vx = -50 + speed
})
controller.player1.onEvent(ControllerEvent.Connected, function () {
    Ham = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 e . . . . 
        . . . . . 2 2 2 2 d 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 e f f c c . 
        . . . . e e 2 2 e f f f f b c . 
        . . . e e e f e e f f f f d c . 
        . . e e 2 2 d f c b 4 4 c b c . 
        . . e e 2 2 b c 4 1 1 4 c . . . 
        . . b 1 1 b e c 4 4 4 4 c . . . 
        . . f f f f d d 4 4 4 b c . . . 
        f f f f f f d d c c c c . . . . 
        f f f . f f f f c c c . . . . . 
        f f . . . . e e e . . . . . . . 
        . . . . . . e e e e . . . . . . 
        `, SpriteKind.playerOne)
    Ham.ay = 200
    controller.player1.moveSprite(Ham, 100, 0)
    Ham.setPosition(10, 7)
    info.player1.setLife(5)
})
let mySprite3: Sprite = null
let Ham: Sprite = null
let mySprite2: Sprite = null
let speed = 0
let mySprite = sprites.create(img`
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    `, SpriteKind.Goal)
let _5 = sprites.create(img`
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    111
    `, SpriteKind.Goal2)
mySprite.setPosition(2, 60)
_5.setPosition(159, 60)
speed = 0
map()
mySprite2 = sprites.create(img`
    1 1 1 1 
    1 1 1 1 
    1 1 1 1 
    1 1 1 1 
    `, SpriteKind.ball)
mySprite2.vx = 50
mySprite2.vy = 50
mySprite2.setBounceOnWall(true)
mySprite2.setStayInScreen(true)

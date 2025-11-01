namespace SpriteKind {
    export const Item = SpriteKind.create()
    export const Tree = SpriteKind.create()
    export const wood = SpriteKind.create()
    export const Crafting_Table = SpriteKind.create()
    export const Pickaxe = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Item, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        otherSprite.follow(mySprite)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += -32.5
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.wood, function (sprite2, otherSprite2) {
    if (controller.B.isPressed()) {
        mySprite5 = sprites.create(assets.image`myImage6`, SpriteKind.Crafting_Table)
        mySprite5.setPosition(mySprite.x, mySprite.y + 10)
    }
})
sprites.onOverlap(SpriteKind.Item, SpriteKind.Crafting_Table, function (sprite, otherSprite) {
    if (controller.up.isPressed()) {
        mySprite6 = sprites.create(assets.image`myImage7`, SpriteKind.Pickaxe)
        mySprite6.setPosition(mySprite.x, mySprite.y)
        mySprite6.follow(mySprite)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tree, function (sprite3, otherSprite3) {
    if (controller.B.isPressed()) {
        animation.runImageAnimation(
        mySprite3,
        [img`
            ................................
            ................................
            ............cccccccc66..........
            ............cccccccc66..........
            ........cccc66777755556666......
            ........cccc66777755556666......
            ....cccc6666666677555577cccc....
            ....cccc6666666677555577cccc....
            ..cc6666667777777777775566cccc..
            ..cc6666667777777777775566cccc..
            ..cc666677777755776677777766cccc
            ..cc666677777755776677777766cccc
            cc6666777766777777667777666666cc
            cc6666777766777777667777666666cc
            cccc66666677667766666666557766cc
            cccc66666677667766666666557766cc
            cccccccc6677776677777766776666cc
            cccccccc6677776677777766776666cc
            ..cccc66666666cc6666666666cccccc
            ..cccc66666666cc6666666666cccccc
            ..cccc6666cc6666cc66cc6666cccc..
            ..cccc6666cc6666cc66cc6666cccc..
            ....ccccffff6666ccffffccccff....
            ....ccccffff6666ccffffccccff....
            ........ccffccccccffccffff......
            ........ccffccccccffccffff......
            ..........44ffffffcc..ee........
            ..........44ffffffcc..ee........
            ............eeeeee....44........
            ............eeeeee....44........
            ..............eeee..ee..........
            ..............eeee..ee..........
            `,img`
            ..............cccccc............
            ..............cccccc............
            ..........cccccccc66cccc........
            ..........cccccccc66cccc........
            ........cccccccc66666666cc......
            ........cccccccc66666666cc......
            ........cc6666cc66776666cc......
            ........cc6666cc66776666cc......
            ......ccff6666666677776666cc....
            ......ccff6666666677776666cc....
            ....44ffffcc66777766777766cc....
            ....44ffffcc66777766777766cc....
            ..eeffcc66666677667777776666cc..
            ..eeffcc66666677667777776666cc..
            eeeeffcc6666cc66777755776677cc..
            eeeeffcc6666cc66777755776677cc..
            eeeeffcccccc6677667777777777cc..
            eeeeffcccccc6677667777777777cc..
            ....ccffff666677666666775555cc..
            ....ccffff666677666666775555cc..
            ee....ccffcc667766777777555566..
            ee....ccffcc667766777777555566..
            ..44eeffcc666666667777557766....
            ..44eeffcc666666667777557766....
            ......ffcc66667755667766cc66....
            ......ffcc66667755667766cc66....
            ........ffcccc66776666cccc......
            ........ffcccc66776666cccc......
            ..........cccc666666cccc........
            ..........cccc666666cccc........
            ............cccccccccc..........
            ............cccccccccc..........
            `],
        1000,
        false
        )
        pause(1400)
        mySprite3.setFlag(SpriteFlag.Invisible, true)
        mySprite4 = sprites.create(assets.image`myImage5`, SpriteKind.wood)
        mySprite4.follow(mySprite)
        mySprite4.setPosition(mySprite.x, mySprite.y)
        pause(7000)
        mySprite3.setFlag(SpriteFlag.Invisible, false)
        animation.runImageAnimation(
        mySprite3,
        assets.animation`myAnim`,
        700,
        false
        )
    }
    if (controller.B.isPressed()) {
        animation.runImageAnimation(
        mySprite3,
        [img`
            ................................
            ................................
            ............cccccccc66..........
            ............cccccccc66..........
            ........cccc66777755556666......
            ........cccc66777755556666......
            ....cccc6666666677555577cccc....
            ....cccc6666666677555577cccc....
            ..cc6666667777777777775566cccc..
            ..cc6666667777777777775566cccc..
            ..cc666677777755776677777766cccc
            ..cc666677777755776677777766cccc
            cc6666777766777777667777666666cc
            cc6666777766777777667777666666cc
            cccc66666677667766666666557766cc
            cccc66666677667766666666557766cc
            cccccccc6677776677777766776666cc
            cccccccc6677776677777766776666cc
            ..cccc66666666cc6666666666cccccc
            ..cccc66666666cc6666666666cccccc
            ..cccc6666cc6666cc66cc6666cccc..
            ..cccc6666cc6666cc66cc6666cccc..
            ....ccccffff6666ccffffccccff....
            ....ccccffff6666ccffffccccff....
            ........ccffccccccffccffff......
            ........ccffccccccffccffff......
            ..........44ffffffcc..ee........
            ..........44ffffffcc..ee........
            ............eeeeee....44........
            ............eeeeee....44........
            ..............eeee..ee..........
            ..............eeee..ee..........
            `,img`
            ..............cccccc............
            ..............cccccc............
            ..........cccccccc66cccc........
            ..........cccccccc66cccc........
            ........cccccccc66666666cc......
            ........cccccccc66666666cc......
            ........cc6666cc66776666cc......
            ........cc6666cc66776666cc......
            ......ccff6666666677776666cc....
            ......ccff6666666677776666cc....
            ....44ffffcc66777766777766cc....
            ....44ffffcc66777766777766cc....
            ..eeffcc66666677667777776666cc..
            ..eeffcc66666677667777776666cc..
            eeeeffcc6666cc66777755776677cc..
            eeeeffcc6666cc66777755776677cc..
            eeeeffcccccc6677667777777777cc..
            eeeeffcccccc6677667777777777cc..
            ....ccffff666677666666775555cc..
            ....ccffff666677666666775555cc..
            ee....ccffcc667766777777555566..
            ee....ccffcc667766777777555566..
            ..44eeffcc666666667777557766....
            ..44eeffcc666666667777557766....
            ......ffcc66667755667766cc66....
            ......ffcc66667755667766cc66....
            ........ffcccc66776666cccc......
            ........ffcccc66776666cccc......
            ..........cccc666666cccc........
            ..........cccc666666cccc........
            ............cccccccccc..........
            ............cccccccccc..........
            `],
        1000,
        false
        )
        pause(1400)
        mySprite3.setFlag(SpriteFlag.Invisible, true)
        mySprite4 = sprites.create(assets.image`myImage5`, SpriteKind.wood)
        mySprite4.follow(mySprite)
        mySprite4.setPosition(mySprite.x, mySprite.y)
        pause(7000)
        mySprite3.setFlag(SpriteFlag.Invisible, false)
        animation.runImageAnimation(
        mySprite3,
        assets.animation`myAnim`,
        700,
        false
        )
    }
    if (controller.B.isPressed()) {
        animation.runImageAnimation(
        mySprite3,
        [img`
            ................................
            ................................
            ............cccccccc66..........
            ............cccccccc66..........
            ........cccc66777755556666......
            ........cccc66777755556666......
            ....cccc6666666677555577cccc....
            ....cccc6666666677555577cccc....
            ..cc6666667777777777775566cccc..
            ..cc6666667777777777775566cccc..
            ..cc666677777755776677777766cccc
            ..cc666677777755776677777766cccc
            cc6666777766777777667777666666cc
            cc6666777766777777667777666666cc
            cccc66666677667766666666557766cc
            cccc66666677667766666666557766cc
            cccccccc6677776677777766776666cc
            cccccccc6677776677777766776666cc
            ..cccc66666666cc6666666666cccccc
            ..cccc66666666cc6666666666cccccc
            ..cccc6666cc6666cc66cc6666cccc..
            ..cccc6666cc6666cc66cc6666cccc..
            ....ccccffff6666ccffffccccff....
            ....ccccffff6666ccffffccccff....
            ........ccffccccccffccffff......
            ........ccffccccccffccffff......
            ..........44ffffffcc..ee........
            ..........44ffffffcc..ee........
            ............eeeeee....44........
            ............eeeeee....44........
            ..............eeee..ee..........
            ..............eeee..ee..........
            `,img`
            ..............cccccc............
            ..............cccccc............
            ..........cccccccc66cccc........
            ..........cccccccc66cccc........
            ........cccccccc66666666cc......
            ........cccccccc66666666cc......
            ........cc6666cc66776666cc......
            ........cc6666cc66776666cc......
            ......ccff6666666677776666cc....
            ......ccff6666666677776666cc....
            ....44ffffcc66777766777766cc....
            ....44ffffcc66777766777766cc....
            ..eeffcc66666677667777776666cc..
            ..eeffcc66666677667777776666cc..
            eeeeffcc6666cc66777755776677cc..
            eeeeffcc6666cc66777755776677cc..
            eeeeffcccccc6677667777777777cc..
            eeeeffcccccc6677667777777777cc..
            ....ccffff666677666666775555cc..
            ....ccffff666677666666775555cc..
            ee....ccffcc667766777777555566..
            ee....ccffcc667766777777555566..
            ..44eeffcc666666667777557766....
            ..44eeffcc666666667777557766....
            ......ffcc66667755667766cc66....
            ......ffcc66667755667766cc66....
            ........ffcccc66776666cccc......
            ........ffcccc66776666cccc......
            ..........cccc666666cccc........
            ..........cccc666666cccc........
            ............cccccccccc..........
            ............cccccccccc..........
            `],
        1000,
        false
        )
        pause(1400)
        mySprite3.setFlag(SpriteFlag.Invisible, true)
        mySprite4 = sprites.create(assets.image`myImage5`, SpriteKind.wood)
        mySprite4.follow(mySprite)
        mySprite4.setPosition(mySprite.x, mySprite.y)
        pause(7000)
        mySprite3.setFlag(SpriteFlag.Invisible, false)
        animation.runImageAnimation(
        mySprite3,
        assets.animation`myAnim`,
        700,
        false
        )
    }
})
let mySprite4: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`pati2`, SpriteKind.Player)
let mySprite2 = sprites.create(assets.image`myImage2`, SpriteKind.Item)
mySprite3 = sprites.create(assets.image`myImage3`, SpriteKind.Tree)
mySprite.setPosition(7, 50)
mySprite2.setPosition(570, 43)
mySprite3.setPosition(290, 80)
scene.cameraFollowSprite(mySprite)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 4 b 
    b d d c d 5 5 b 5 4 4 4 4 4 b . 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `,img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `,img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . . b d d 5 5 5 5 5 5 5 5 b . . 
    . b d d d d 5 5 5 5 5 5 5 5 b . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    . b 5 5 b c d d 5 5 5 5 5 d b . 
    b b c c c d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `,img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . b b d d d 5 5 5 5 5 5 5 b . . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    c b 5 5 b c d d 5 5 5 5 5 5 b . 
    b b c c c d d d 5 5 5 5 5 d b . 
    . . . . c c d d d 5 5 5 b b . . 
    . . . . . . c c c c c b b . . . 
    `,img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    . b b b d 5 5 5 5 5 4 4 4 4 4 b 
    b d d d b b d 5 5 4 4 4 4 4 b . 
    b b d 5 5 5 b 5 5 5 5 5 5 b . . 
    c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
    c b d c d 5 5 b 5 5 5 5 5 5 b . 
    . c d d c c b d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `],
100,
characterAnimations.rule(Predicate.MovingRight)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . b 5 5 b . . . . . . . . . 
    . . . . b b b b b b . . . . . . 
    . . . b 5 5 5 5 5 b b . . . . . 
    . . b 5 5 5 5 5 5 5 b b b b b . 
    . . b 5 5 5 5 5 5 5 5 b 5 d b . 
    . . f 4 d 5 f 1 d 5 b 5 5 b . . 
    . . c 4 4 5 f f 1 b 5 5 d b . . 
    . b 4 4 4 4 b f d 5 5 5 b d b b 
    b 4 4 4 4 4 4 5 b 5 5 d c d d b 
    . b 5 5 5 5 5 5 5 b c c d d d c 
    . b 5 5 5 5 5 5 5 d d d d d b c 
    . b d 5 5 5 5 5 d d d d d d c . 
    . . b b 5 5 5 d d d d d b c . . 
    . . . b b c c c c c c c c . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . b 5 b . . . . . . . . . . 
    . . . . b 5 b . . . . . . . . . 
    . . . . b b b b b b . . . . . . 
    . . . b 5 5 5 5 5 b b . . . . . 
    . . b 5 5 5 5 5 5 5 b b b b b . 
    . . b 5 5 5 5 5 5 5 5 b 5 d b . 
    . . f 4 d 5 f 1 d 5 b 5 5 b . . 
    . . c 4 4 5 f f 1 b 5 5 d b . . 
    b 4 4 4 4 4 b f d 5 5 5 b d b b 
    . b 4 4 4 4 4 5 b 5 5 d c d d b 
    . b 5 5 5 5 5 5 5 b c c d d d c 
    . b 5 5 5 5 5 5 5 d d d d d b c 
    . b d 5 5 5 5 5 d d d d d d c . 
    . . b b 5 5 5 d d d d d b c . . 
    . . . b b c c c c c c c c . . . 
    `,img`
    . . . b 5 b . . . . . . . . . . 
    . . . . b 5 b . . . . . . . . . 
    . . . . . c b . . . . . . . . . 
    . . . . b b b b b b . . . . . . 
    . . . b 5 5 5 5 5 b b . . . . . 
    . . f d 5 5 f 1 d 5 b b . . . . 
    . . c 4 d 5 f f 1 5 5 b . . . . 
    . . 4 4 d d b f d 5 5 b . . . . 
    b 4 4 4 4 4 5 5 5 d b b d d d b 
    . b 4 4 4 4 4 5 5 b 5 5 5 d b b 
    . . b 5 5 5 5 5 d 5 5 5 5 c d b 
    . b 5 5 5 5 5 5 b 5 5 d c d d c 
    . b 5 5 5 5 5 5 5 b c c d d b c 
    . b d 5 5 5 5 5 d d d d d d c . 
    . . b b 5 5 5 d d d d d b c . . 
    . . . b b c c c c c c c c . . . 
    `,img`
    . . . b 5 b . . . . . . . . . . 
    . . . . b 5 b . . . . . . . . . 
    . . . . b b b b b b . . . . . . 
    . . . b 5 5 5 5 5 b b . . . . . 
    . . c 4 d 5 f 1 d 5 b b . . . . 
    b 4 4 4 d d f f 1 5 5 b . . . . 
    . b 4 4 4 4 b f d 5 5 b . . . . 
    . . b 4 4 4 4 5 5 5 5 d b . . . 
    . . b 5 5 5 5 5 5 5 5 d d b . . 
    . b 5 5 5 5 5 5 5 5 d d d d b . 
    . b 5 5 5 5 5 5 5 b b b d d d b 
    . b 5 5 5 5 5 5 c d 5 5 b d d c 
    . b 5 5 5 5 5 5 d c d 5 d b b c 
    . b d 5 5 5 5 5 d d c b 5 5 b . 
    . . b b 5 5 5 d d d d c c c b b 
    . . . b b c c c c c c c c . . . 
    `,img`
    . . . b 5 b . . . . . . . . . . 
    . . . . b 5 b . . . . . . . . . 
    . . . . b b b b b b . . . . . . 
    . . . b 5 5 5 5 5 b b . . . . . 
    . . c 4 d 5 f 1 d 5 b b . . . . 
    b 4 4 4 d d f f 1 5 5 b . . . . 
    . b 4 4 4 4 b f d 5 5 b . . . . 
    . . b 4 4 4 4 5 5 5 5 d b . . . 
    . . b 5 5 5 5 5 5 5 d d d b b . 
    . b 5 5 5 5 5 5 5 b b b d d d b 
    . b 5 5 5 5 5 5 c d 5 5 b d d c 
    . b 5 5 5 5 5 5 d c d 5 d b b c 
    . b 5 5 5 5 5 5 d d c b 5 5 b c 
    . b d 5 5 5 5 5 d d d c c c b b 
    . . b b 5 5 5 d d d c c . . . . 
    . . . b b c c c c c . . . . . . 
    `,img`
    . . . b 5 b . . . . . . . . . . 
    . . . . b 5 b . . . . . . . . . 
    . . . . b b b b b b . . . . . . 
    . . . b 5 5 5 5 5 b b . . . . . 
    . . f d 5 5 f 1 d 5 b b . . . . 
    . . c 4 d 5 f f 1 5 5 b . . . . 
    . . 4 4 d d b f d 5 5 b . . . . 
    b 4 4 4 4 4 5 5 5 5 5 d b b b . 
    . b 4 4 4 4 4 5 5 d b b d d d b 
    . . b 5 5 5 5 5 5 b 5 5 5 d b b 
    . b 5 5 5 5 5 5 d 5 5 5 5 c d c 
    . b 5 5 5 5 5 5 b 5 5 d c d b c 
    . b d 5 5 5 5 5 d b c c d d c . 
    . . b b 5 5 5 d d d d d b c . . 
    . . . b b c c c c c c c c . . . 
    . . . . . . . . . . . . . . . . 
    `],
100,
characterAnimations.rule(Predicate.MovingLeft)
)
controller.moveSprite(mySprite, 100, 0)
scene.setBackgroundImage(assets.image`background`)
tiles.setCurrentTilemap(tilemap`level0`)
mySprite.ay = 30
mySprite.setStayInScreen(true)
music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.LoopingInBackground)

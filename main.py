class ActionKind(Enum):
    Walking = 0
    Idle = 1
    Jumping = 2
    FALLING = 3
    Falling = 4
@namespace
class SpriteKind:
    Item = SpriteKind.create()
    Tree = SpriteKind.create()
    wood = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    if controller.B.is_pressed():
        otherSprite.follow(mySprite)
sprites.on_overlap(SpriteKind.player, SpriteKind.Item, on_on_overlap)

def on_a_pressed():
    mySprite.vy += -32.5
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap2(sprite2, otherSprite2):
    global mySprite5
    if controller.B.is_pressed():
        mySprite5 = sprites.create(assets.image("""
            myImage6
            """), SpriteKind.player)
        mySprite5.set_position(mySprite.x, mySprite.y + 10)
sprites.on_overlap(SpriteKind.player, SpriteKind.wood, on_on_overlap2)

def on_on_overlap3(sprite3, otherSprite3):
    global mySprite4
    if controller.B.is_pressed():
        animation.run_image_animation(mySprite3,
            assets.animation("""
                delete
                """),
            1000,
            False)
        pause(1400)
        sprites.destroy(mySprite3)
        mySprite4 = sprites.create(assets.image("""
            myImage5
            """), SpriteKind.wood)
        mySprite4.follow(mySprite)
sprites.on_overlap(SpriteKind.player, SpriteKind.Tree, on_on_overlap3)

mySprite4: Sprite = None
mySprite5: Sprite = None
mySprite3: Sprite = None
mySprite: Sprite = None
mySprite = sprites.create(assets.image("""
    pati2
    """), SpriteKind.player)
mySprite2 = sprites.create(assets.image("""
    myImage2
    """), SpriteKind.Item)
mySprite3 = sprites.create(assets.image("""
    myImage3
    """), SpriteKind.Tree)
mySprite.set_position(7, 50)
mySprite2.set_position(570, 43)
mySprite3.set_position(290, 80)
scene.camera_follow_sprite(mySprite)
characterAnimations.loop_frames(mySprite,
    [img("""
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
            """),
        img("""
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
            """),
        img("""
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
            """),
        img("""
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
            """),
        img("""
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
            """),
        img("""
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
            """)],
    100,
    characterAnimations.rule(Predicate.MOVING_RIGHT))
characterAnimations.loop_frames(mySprite,
    [img("""
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
            """),
        img("""
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
            """),
        img("""
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
            """),
        img("""
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
            """),
        img("""
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
            """),
        img("""
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
            """)],
    100,
    characterAnimations.rule(Predicate.MOVING_LEFT))
controller.move_sprite(mySprite, 100, 0)
scene.set_background_image(assets.image("""
    background
    """))
tiles.set_current_tilemap(tilemap("""
    level0
    """))
mySprite.ay = 30
mySprite.set_stay_in_screen(True)
music.play(music.string_playable("G B A G C5 B A B ", 120),
    music.PlaybackMode.LOOPING_IN_BACKGROUND)
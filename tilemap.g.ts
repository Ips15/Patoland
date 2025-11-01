// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level0":
            case "level2":return tiles.createTilemap(hex`28000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000900000000000000000000000000000000000000000000000000000000000000000000000000000d030e0000000000000000000000000000020308000000000000000000000000000000000000000d0405060e0000000000010208090000090d0405060e000c000c000009000000000900000000090d04070707060e0902030303040603030303030a070b030303030303030303030303030303030303040707070707050804050505070705050505050707070505050505050505050505050505050505050707070707070705`, img`
........................................
........................................
........................................
..................................222...
...........222...................22222..
....22.....222..................2222222.
2222222222222222222222222222222222222222
2222222222222222222222222222222222222222
`, [myTiles.transparency16,myTiles.transparency16,sprites.builtin.forestTiles1,sprites.builtin.forestTiles2,sprites.builtin.forestTiles5,sprites.builtin.forestTiles6,sprites.builtin.forestTiles7,sprites.builtin.forestTiles10,sprites.builtin.forestTiles3,sprites.swamp.swampTile2,sprites.builtin.forestTiles9,sprites.builtin.forestTiles11,sprites.swamp.swampTile0,myTiles.tile5,myTiles.tile8,myTiles.tile9,myTiles.tile10], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`28000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000900000000000000000000000000000000000000000000000000000000000000000000000000000d030e0000000000000000000000000000020308000000000000000000000000000000000000000d0405060e0000000000010208090000090d0405060e000c000c000009000000000900000000090d04070707060e0902030303040603030303030a070b030303030303030303030303030303030303040707070707050804050505070705050505050707070505050505050505050505050505050505050707070707070705`, img`
........................................
........................................
........................................
..................................222...
...........222...................22222..
....22.....222..................2222222.
2222222222222222222222222222222222222222
2222222222222222222222222222222222222222
`, [myTiles.transparency16,myTiles.tile3,sprites.builtin.forestTiles1,sprites.builtin.forestTiles2,sprites.builtin.forestTiles5,sprites.builtin.forestTiles6,sprites.builtin.forestTiles7,sprites.builtin.forestTiles10,sprites.builtin.forestTiles3,sprites.swamp.swampTile2,sprites.builtin.forestTiles9,sprites.builtin.forestTiles11,sprites.swamp.swampTile0,myTiles.tile5,myTiles.tile8,myTiles.tile9,myTiles.tile10], TileScale.Sixteen);
            case "cave":
            case "cave1":return tiles.createTilemap(hex`100008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000606060606060000000606060606060605050502050301040102050205020202`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile3,sprites.dungeon.floorDark0,sprites.dungeon.floorDark1,myTiles.tile13,sprites.dungeon.floorMixed,sprites.dungeon.floorLight4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile9":
            case "tile11":return tile11;
            case "myTile12":
            case "tile14":return tile14;
            case "myTile13":
            case "tile15":return tile15;
            case "myTile14":
            case "tile16":return tile16;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile8":
            case "tile10":return tile10;
            case "myTile10":
            case "tile12":return tile12;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile11":
            case "tile13":return tile13;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

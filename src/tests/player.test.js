import {Player} from "../js/player.js"
import {gameboard} from "../js/gameboard.js"


describe("player takes turns playing the game by attacking the board", () => {
    
    let player = new Player();
    let enemyBoard = new gameboard();

    test("player can attack the enemy game board", () => {
        player.attack(0, 0, enemyBoard);
        expect(enemyBoard.getMissedShots().length).toBe(1);
    })

});
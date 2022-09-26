import {Player} from "../js/player.js"
import {gameboard} from "../js/gameboard.js"

let player = new Player();
let enemyBoard = new gameboard();

describe("player takes turns playing the game by attacking the board", () => {

    test("player can attack the enemy game board", () => {
        player.attack(0, 0, enemyBoard);
        expect(enemyBoard.getMissedShots().length).toBe(1);
    });

});

describe("computer can attack a board randomly", () => {

    test("robot attacks random cell", () => {
        player.robotAttack(enemyBoard);
        player.robotAttack(enemyBoard);

        expect(enemyBoard.getMissedShots().length).toBe(3);
    });

});
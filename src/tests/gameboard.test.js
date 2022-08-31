import {gameboard} from "../js/gameboard.js"
import { ship } from "../js/ship.js";


let board;
let testShip;

beforeAll(() => {
    board = new gameboard();
    testShip = new ship(4);
});

//gameboard creates a grid to play on (10x10)
test("create a 10x10 grid", () => {
    expect(board.createGrid().length * board.createGrid()[0].length).toBe(100);
});


//gameboard places ships at specific coordinates on the board
test("gameboard places ship at specific coordinates", () => {
    board.placeHorizontalShip(testShip,1,1);
    expect(board.getGrid()[1][1]).toBe(testShip);
});

test("entire ship is added to board",() => {
    board.placeHorizontalShip(testShip,0,0);
    expect(board.getGrid()[0][3]).toBe(testShip);
});
//receiveAttack function takes a pair of coordinates and determines if a hip is on that location

//receiveAttack sends the 'hit' function to the ship it hit

//receiveAttack returns coordinates of a missed shot

//gameboard has record of missed shots coordinates

//gameboard hasWon function that determines if all ships have been sunk


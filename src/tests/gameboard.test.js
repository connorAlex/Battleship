import {gameboard} from "../js/gameboard.js"


let board;

beforeAll(() => {
    board = new gameboard();
});

//gameboard creates a grid to play on (10x10)
test("create a 10x10 grid", () => {
    
    expect(board.createGrid().length * board.createGrid()[0].length).toBe(100);
});
//gameboard creates a new ship

//gameboard has list of all ships in play

//gameboard places ships at specific coordinates on the board

//recieveAttack function takes a pair of coordinates and determines if a hip is on that location

//receiveAttack sends the 'hit' function to the ship it hit

//receiveAttack returns coordinates of a missed shot

//gameboard has record of missed shots coordinates

//gameboard hasWon function that determines if all ships have been sunk


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

describe("ship placement", () => {
    beforeAll(() => {
        testShip = new ship(4);
    });

    //gameboard places ships at specific coordinates on the board
    test("gameboard places ship at specific coordinates", () => {
        board.placeShip(testShip,1,1, true);
        expect(board.getGrid()[1][1].ship).toBe(testShip);
    });

    test("entire ship is added to board", () => {
        board.placeShip(testShip,0,0, true);
        expect(board.getGrid()[0][3].ship).toBe(testShip);
    });

    test("ship can be place vertically", () => {
        board.placeShip(testShip,0,0, false);
        expect(board.getGrid()[3][0].ship).toBe(testShip);
    });
    
});

describe('detecting hits on board',() => {
    let dummyShip;
    beforeAll(() => {
        
        dummyShip = new ship(3);
        board.placeShip(dummyShip,3,3,true);
    });

    test("ship can be hit on grid", () => {
        
        board.receiveAttack(3,3);
        expect(dummyShip.getPosition(0)).toBe(1);
    });
    test("vertical ship can be hit on grid", () => {
        let a = new ship(2);
        board.placeShip(a, 0,0, false);
        board.receiveAttack(0,2);
        expect(a.getPosition(1)).toBe(1);
    });
    test("a miss returns coordinates", () => {
        expect(board.receiveAttack(9,9)).toEqual([9,9]);
    })
});
//receiveAttack function takes a pair of coordinates and determines if a ship is on that location

//receiveAttack sends the 'hit' function to the ship it hit

//receiveAttack returns coordinates of a missed shot

//gameboard has record of missed shots coordinates

//gameboard hasWon function that determines if all ships have been sunk


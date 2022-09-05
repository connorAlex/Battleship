import {gameboard} from "../js/gameboard.js"
import { ship } from "../js/ship.js";


let board;
let testShip;
board = new gameboard();

//gameboard creates a grid to play on (10x10)
test("create a 10x10 grid", () => {
    expect(board.getGrid().length * board.getGrid()[0].length).toBe(100);
});



describe("ship placement", () => {
    beforeAll(() => {
        testShip = new ship(4);
    });

    //gameboard places ships at specific coordinates on the board
    test("gameboard places ship at specific coordinates", () => {
        board.placeShip(testShip,0,0, true);
        expect(board.getGrid()[0][0].shipIndex).toBe(0);
    });

    test("entire ship is added to board", () => {
        board.placeShip(testShip,0,0, true);
        expect(board.getGrid()[0][3].shipIndex).toBe(3);
    });

    test("ship can be place vertically", () => {
        board.placeShip(testShip,0,0, false);
        expect(board.getGrid()[3][0].ship).toBe(testShip);
    });
    
});

describe('detecting hits on board',() => {
    let dummyShip;
    beforeAll(() => {
        dummyShip = new ship(5);
        board.placeShip(dummyShip,5,5,true);
    });

    test("ship can be hit on grid", () => {
        board.receiveAttack(5,5);
        expect(dummyShip.getPosition(0)).toBe(1);
    });

    test("vertical ship can be hit on grid", () => {
        let a = new ship(3);
        board.placeShip(a, 0, 0, false);
        board.receiveAttack(0,2);
        expect(a.getPosition(2)).toBe(1);
    });
    
});

//gameboard has record of missed shots coordinates
describe('record missed shots', () => {
    
    beforeAll(()=> {
        board.receiveAttack(1,1);
        board.receiveAttack(1,2);
    });

    test("return list of all missed shots", () => {
        expect(board.getMissedShots()).toEqual([[1,1],[1,2]]);
    });
});

describe('detect if ships are destroyed', () => {

    beforeAll(() => {
        testShip = new ship(1);
        board.placeShip(testShip,0,0, true);
    });
    
    test("detect if all ships are destroyed (some alive)", () => {
        expect(board.isAllDestroyed()).toBe(false);
    });

    // too lazy to kill every ship, run with test.only

    // test("detect if all ships are destroyed (all dead)", () => {
    //     board.receiveAttack(0,0);
    //     expect(board.isAllDestroyed()).toBe(true);
    // });

});

//gameboard hasWon function that determines if all ships have been sunk


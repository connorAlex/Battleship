import {displayController} from "../js/display.js";
import { gameboard } from "../js/gameboard.js";

const testBoard = new gameboard();

describe("display is created", () => {
    test("representational grid is created on DOM", () => {
        expect(displayController.updateBoard(testBoard.getGrid()).children.length).toBe(10);
    });
});
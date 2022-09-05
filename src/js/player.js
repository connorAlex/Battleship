import {gameboard} from "../js/gameboard.js"

const Player = () => {

    const attack = (x, y, board) => board.receiveAttack(x,y);

    return {
        attack,
    }
};

export {Player};
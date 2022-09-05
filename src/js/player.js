import {gameboard} from "../js/gameboard.js"

const Player = () => {

    const attack = (x, y, board) => board.receiveAttack(x,y);

    const robotAttack = (board) => {
        let x = Math.round(Math.random() * 10);
        let y = Math.round(Math.random() * 10);

        board.receiveAttack(x,y);
    };

    return {
        attack,
        robotAttack
    }
};

export {Player};
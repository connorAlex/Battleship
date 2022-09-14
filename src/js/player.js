import {gameboard} from "../js/gameboard.js"

const Player = () => {

    let history = [];

    const attack = (x, y, board) => {
        
        board.receiveAttack(x,y);
    };
    
    const getHistory = () => history;

    const robotAttack = (board) => {
        let coordinates = getRandomCoordinates();
        console.log(coordinates);
        history.push(coordinates);
        board.receiveAttack(coordinates[0],coordinates[1]);
    };

    const getRandomCoordinates = () => {
        let x = Math.abs(Math.round(Math.random() * 10 - 1));
        let y = Math.abs(Math.round(Math.random() * 10 - 1));

        let num = [x,y];

        if (!history.includes(num)) {
            return num;
        }
        else{
            return getRandomCoordinates();
        };
    }

    return {
        attack,
        robotAttack,
        getHistory
    }
};

export {Player};
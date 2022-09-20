import {gameboard} from "../js/gameboard.js"
import {ship} from "./ship.js";


const Player = (name) => {
    let board = gameboard();
    let enemy;

    let history = [];

    const attack = (x, y) => {
        x = parseInt(x);
        y = parseInt(y);

        if (history.includes([x,y]) === false) {
            getEnemyBoard().receiveAttack(x,y);
        }
        history.push([x,y]);
        
    };

    const setEnemy = (player) => {
        enemy = player;
    };
    const getEnemy = () => enemy;

    const getEnemyBoard = () => enemy.getGameboard();
    
    const getGameboard = () => board;

    const getHistory = () => history;

    const getName = () => name;

    const robotAttack = () => {
        let coordinates = getRandomCoordinates();
        history.push(coordinates);
        attack(coordinates[0],coordinates[1]);
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
        getHistory,
        setEnemy,
        getGameboard,
        getEnemyBoard,
        getEnemy,
        getName,
    }
};

export {Player};
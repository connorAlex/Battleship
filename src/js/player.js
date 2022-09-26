import {gameboard} from "../js/gameboard.js"
import {ship} from "./ship.js";


const Player = (name) => {
    let board = gameboard();
    let enemy;
    let moves = [];
    let history = [];

    const attack = (x, y) => {
        x = parseInt(x);
        y = parseInt(y);

        if (history.includes([x,y]) === false) {
            return getEnemyBoard().receiveAttack(x,y);
        }
        
    };

    const setEnemy = (player) => {
        enemy = player;
    };

    const hasNotHitBefore = (arr) => {
        let x = arr[0];
        let y = arr[1];

        if (!moves.find(function([a,b]) {
            return a === x && b === y
        })){
            return true;
        }
        moves.pop(x,y);
        return false;

    }

    const getEnemy = () => enemy;

    const getEnemyBoard = () => enemy.getGameboard();
    
    const getGameboard = () => board;

    const getHistory = () => history;

    const getName = () => name;

    const robotAttack = () => {
        let coordinates = getRandomCoordinates();
        if (hasNotHitBefore(coordinates)) {
            attack(coordinates[0],coordinates[1]);
        }
    };

    //append all possible combinations of [x,y] to an array
    const createMoves = () => {
        while (moves.length != 100) {
            let x = Math.floor(Math.random() * 10);
            let y = Math.floor(Math.random() * 10);
            
            if (!moves.find(function([a,b]) {
                return a === x && b === y
            })){
                moves.push([x,y]);
            }

        }

    };
    createMoves();
    
    const getRandomCoordinates = () => {
        let num = moves.pop();
        return num;
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
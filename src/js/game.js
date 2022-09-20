import { gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { displayController } from "./display.js";
import {ship} from "./ship.js";

const game = (() => {
    let player = Player();
    let computer = Player();
    let testShip = ship(3);
    let body = document.querySelector("body");

    displayController.setPlayer(player);
    player.setEnemy(computer);
    computer.setEnemy(player);
    computer.getGameboard().placeShip(testShip,0,0,true);

    // player.attack(0,0);
    // player.attack(1,0);
    
    
    body.appendChild(displayController.updateBoard(player.getEnemyBoard().getGrid()));
    body.appendChild(displayController.updateBoard(player.getGameboard().getGrid()));
})();

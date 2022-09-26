import { gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { displayController } from "./display.js";
import { ship } from "./ship.js";

const game = (() => {
  let player = Player("player");
  let computer = Player("computer");
  let carrier = ship(5);
  let battleship = ship(4);
  let destroyer = ship(3);
  let sub = ship(3);
  let cruiser = ship(2);
  let ships = [carrier, battleship, destroyer, sub, cruiser];
  let direction = false;
  let body = document.querySelector("body");
  let axisBtn = document.querySelector(".axis");

  player.setEnemy(computer);
  computer.setEnemy(player);

  axisBtn.addEventListener("click", () => displayController.toggleOrientation());
 

  while (computer.getGameboard().getShips().length < 5) {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    let ship = ships.at(-1);

    if (
      computer
        .getGameboard()
        .placeShip(ship, parseInt(x), parseInt(y), direction) === false
    ) {
      continue;
    }

    ships.pop();
    direction = !direction;
  }
  console.log(computer.getGameboard().getShips());
  displayController.setPlayer(player);
  body.appendChild(displayController.updateBoard(computer));
  body.appendChild(displayController.updateBoard(player));
})();

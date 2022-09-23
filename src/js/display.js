import { ship } from "../js/ship.js";
import { gameboard } from "./gameboard.js";
import { Player } from "./player.js";

const displayController = (() => {
    let currentPlayer;
    let grid;
    let allPlaced = false;
    let body = document.querySelector("body");
    let carrier = ship(5);
    let battleship = ship(4);
    let destroyer = ship(3);
    let sub = ship(3);
    let cruiser = ship(2);
    let ships = [
      carrier,
      battleship,
      destroyer,
      sub,
      cruiser
    ];

    const setPlayer = (player) => {
      currentPlayer = player;
    };

    const updateBoard = (player) => {
      grid = player.getGameboard().getGrid();
      let boardParent = document.createElement("div");
      let titleDiv = document.createElement("div");
      let title =`${player.getName()}'s board`;

      titleDiv.append(title);
      boardParent.append(titleDiv);
      boardParent.classList.add("board");

      //this should be refactored
      for (let i = 0; i < grid.length; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        
        for (let j = 0; j < grid[i].length; j++) {
          let cell = createCell(j,i);

          if (player.getName() === "player" && grid[i][j].ship != undefined) {
            cell.classList.add("ship");
          };

          row.appendChild(cell);
        };
        
        boardParent.appendChild(row);
      }

    
    return boardParent;
  };




  const createCell = (x,y) => {
    let cell = document.createElement("div");
    cell.classList.add("cell")
    cell.setAttribute("y", y);
    cell.setAttribute("x", x);
    cell.innerHTML = `${y}${x}`;
    hover(cell);

    cell.addEventListener("click", (e) => {
      let isPlayerBoard = e.target.parentNode.parentNode.nextElementSibling;
      if (allPlaced === false && isPlayerBoard === null){
        selectCell(cell);
      } else if (allPlaced === true && isPlayerBoard != null && !cell.classList.contains("hit") && !cell.classList.contains("miss")) {
        selectCell(cell);
      };
  

    });

    if (grid[y][x].hit === true) {
      markHit(cell);
    } else if (grid[y][x].hit === false){
      markMiss(cell);
    };

    return cell;
  }

  const markHit = (cell) => {
    cell.classList.remove("hover");
    cell.classList.add("hit");
  };

  const markMiss = (cell) => {
    cell.classList.add("miss");
  };

  const hover = (cell) => {
    cell.addEventListener("mouseover", (e) => {
      if (e.target.parentNode.parentNode.nextElementSibling != null) {
        cell.classList.toggle("hover");
      };
    });
    cell.addEventListener("mouseout", (e) => {
      if (e.target.parentNode.parentNode.nextElementSibling != null) {
        cell.classList.toggle("hover");
      };
      
    });
  };

  //this is doing a million things...sloppy...
  const selectCell = (cell) => {
    const x = parseInt(cell.getAttribute("x"));
    const y = parseInt(cell.getAttribute("y"));
    let boards = document.querySelectorAll(".board");

    if (allPlaced === true) {
      currentPlayer.attack(x,y);
      currentPlayer.getEnemy().robotAttack();

      if (currentPlayer.getGameboard().isAllDestroyed()){
        endGame(currentPlayer.getEnemy().getName());
      } else if (currentPlayer.getEnemyBoard().isAllDestroyed()) {
        endGame(currentPlayer.getName());
      }

    }else {
      let selectedShip = ships[currentPlayer.getGameboard().getShips().length];

      currentPlayer.getGameboard().placeShip(
        selectedShip,
        x,y,true);

      if (currentPlayer.getGameboard().getShips().length === 5){
        allPlaced = true;
      }

      
    };
    

    body.replaceChild(updateBoard(currentPlayer.getEnemy()), boards[0]);
    body.replaceChild(updateBoard(currentPlayer), boards[1]);

  };

  const endGame = (name) => {
    body.innerHTML = `game over, ${name} wins!`;
  };

  return {
    updateBoard,
    setPlayer,
  };
}
    

)();



export { displayController };

import { ship } from "../js/ship.js";
import { gameboard } from "./gameboard.js";
import { Player } from "./player.js";

const displayController = (() => {
    let currentPlayer;
    let body = document.querySelector("body");
    let grid;

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
          cell.addEventListener("click", (e) => {
            if (e.target.parentNode.parentNode.nextElementSibling != null) {
              selectCell(cell);
            };
          });
          cell.classList.add("cell")

          if (player.getName() === "player" && grid[i][j].ship != undefined) {
            cell.classList.add("ship");
          }
          
          if (grid[i][j].hit === true) {
            markHit(cell);
          } else if (grid[i][j].hit === false){
            markMiss(cell);
          };
          row.appendChild(cell);
        };
        
        boardParent.appendChild(row);
      }

    
    return boardParent;
  };

  const createCell = (x,y) => {
    let cell = document.createElement("div");
    cell.setAttribute("y", y);
    cell.setAttribute("x", x);
    cell.innerHTML = `${y}${x}`;
    return cell;
  }

  const markHit = (cell) => {
    cell.classList.add("hit");
  };

  const markMiss = (cell) => {
    cell.classList.add("miss");
  };

  const selectCell = (cell) => {
    const x = cell.getAttribute("x");
    const y = cell.getAttribute("y");
    let boards = document.querySelectorAll(".board");

    //this current player is why only the top board is changing
    currentPlayer.attack(x,y);
    currentPlayer.getEnemy().robotAttack();

    if (currentPlayer.getGameboard().isAllDestroyed()){
      endGame(currentPlayer.getName());
    } else if (currentPlayer.getEnemyBoard().isAllDestroyed()) {
      endGame(currentPlayer.getEnemy().getName());
    }
    
    body.replaceChild(updateBoard(currentPlayer.getEnemy()), boards[0]);
    body.replaceChild(updateBoard(currentPlayer), boards[1]);
  };

  const endGame = (name) => {
    alert(`game over, ${name} wins!`);
  };

  return {
    updateBoard,
    setPlayer,
  };
}
    

)();



export { displayController };

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
          hover(cell);

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

  const selectCell = (cell) => {
    const x = cell.getAttribute("x");
    const y = cell.getAttribute("y");
    let boards = document.querySelectorAll(".board");

    //this current player is why only the top board is changing
    currentPlayer.attack(x,y);
    currentPlayer.getEnemy().robotAttack();

    body.replaceChild(updateBoard(currentPlayer.getEnemy()), boards[0]);
    body.replaceChild(updateBoard(currentPlayer), boards[1]);

    if (currentPlayer.getEnemyBoard().isAllDestroyed()){
      endGame(currentPlayer.getEnemy().getName());
    } else if (currentPlayer.getGameboard().isAllDestroyed()) {
      console.log("kjasd;fljkasdf");
      console.log(currentPlayer.getName());
      endGame(currentPlayer.getEnemy().getName());
    }

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

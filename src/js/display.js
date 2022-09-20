import { ship } from "../js/ship.js";
import { gameboard } from "./gameboard.js";

const displayController = (() => {
    let currentPlayer;
    let body = document.querySelector("body");

    const setPlayer = (player) => {
      currentPlayer = player;
    };

    const updateBoard = (grid) => {

      let boardParent = document.createElement("div");
      boardParent.classList.add("board");

      for (let i = 0; i < grid.length; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        
        for (let j = 0; j < grid[i].length; j++) {
          let cell = createCell(j,i);
          cell.classList.add("cell")

          if (grid[i][j].hit === true) {
            markHit(cell);
          };
          row.appendChild(cell);
        };
  
        boardParent.appendChild(row);
      }
    
    return boardParent;
  };

  const createCell = (x,y) => {
    let cell = document.createElement("div");
    cell.addEventListener("click", () => selectCell(cell));
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
    console.log(boards);
    currentPlayer.attack(x,y);
    currentPlayer.getEnemy().robotAttack();
    
    body.replaceChild(updateBoard(currentPlayer.getEnemyBoard().getGrid()), boards[0]);
    body.replaceChild(updateBoard(currentPlayer.getGameboard().getGrid()), boards[1]);
  };

  const test = () => {
    let a = "abc";
    return a;
  };

  return {
    updateBoard,
    test,
    setPlayer,
  };
}
    

)();



export { displayController };

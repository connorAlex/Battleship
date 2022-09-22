const gameboard = () => {
  let grid = [];
  let missedShots = [];
  let shipCatalogue = [];
  const createGrid = () => {
    for (let i = 0; i < 10; i++) {
      grid.push([]);
      for (let j = 0; j < 10; j++) {
        grid[i][j] = { ship: undefined, shipIndex: undefined, hit: null};
      }
    }
    return grid;
  };
  grid = createGrid();
  

  const getGrid = () => grid;
  const getMissedShots = () => missedShots;

  const placeShip = (myShip, x, y, isHorizontal) => {
    shipCatalogue.push(myShip);
    for (let i = 0; i < myShip.getLength(); i++) {
      if (isHorizontal === true) {
        grid[y][x + i].ship = myShip;
        grid[y][x + i].shipIndex = i;
      } else {
        grid[y + i][x].ship = myShip;
        grid[y + i][x].shipIndex = i;
      }
    }
  };

  const receiveAttack = (x, y) => {
    let cell = grid[y][x];
    if(cell.ship === undefined) {
      missedShots.push([x, y]);
      cell.hit = false;
    } else {
      console.log("hit");
      cell.ship.hit(cell.shipIndex);
      cell.hit = true;
      
    }
  };

  
  const isAllDestroyed = () => {
    for (let i = 0; i < shipCatalogue.length; i++) {
      if (shipCatalogue[i].isSunk() === false) {
        return false;
      }
    }
    return true;
  };

  return {
    createGrid,
    placeShip,
    getGrid,
    receiveAttack,
    getMissedShots,
    isAllDestroyed,
  };
};

export { gameboard };

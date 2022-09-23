const gameboard = () => {
  let grid = [];
  let missedShots = [];
  let shipCatalogue = [];

  const createGrid = () => {
    for (let i = 0; i < 10; i++) {
      grid.push([]);
      for (let j = 0; j < 10; j++) {
        grid[i][j] = { ship: undefined, shipIndex: undefined, hit: null};
      };
    };
    return grid;
  };

  grid = createGrid();
  const getGrid = () => grid;
  const getMissedShots = () => missedShots;
  const getShips = () => shipCatalogue;

  const validateCell = (x,y) => {
    if (grid[y][x] === undefined){
      return false;
    };
    return true;
  }

  const placeShip = (myShip, x, y, isHorizontal) => {
    if (grid[y][x].ship != undefined){
      return false;
    };
    for (let i = 0; i < myShip.getLength(); i++){
      if (isHorizontal){
        if (grid[y][x + i] === undefined) return false;
      } else{
        if(grid[y + i] === undefined) return false;
      }
    };
    
    shipCatalogue.push(myShip);

    for (let i = 0; i < myShip.getLength(); i++) {
      if (isHorizontal === true) {
        grid[y][x + i].ship = myShip;
        grid[y][x + i].shipIndex = i;
      } else {
        grid[y + i][x].ship = myShip;
        grid[y + i][x].shipIndex = i;
      };
    };
  };
  
  const receiveAttack = (x, y) => {
    let cell = grid[y][x];

    if(cell.ship === undefined) {
      missedShots.push([x, y]);
      cell.hit = false;
    } else {
      cell.ship.hit(cell.shipIndex);
      cell.hit = true;
    };
  };

  
  const isAllDestroyed = () => {
  
    for (let i = 0; i < shipCatalogue.length; i++) {
      if (shipCatalogue[i].isSunk() === false) {
        return false;
      };
    };
    return true;
  };

  return {
    createGrid,
    placeShip,
    getGrid,
    receiveAttack,
    getMissedShots,
    isAllDestroyed,
    getShips,
    validateCell
  };
};

export { gameboard };

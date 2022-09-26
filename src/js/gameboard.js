const gameboard = () => {
  let grid = [];
  let missedShots = [];
  let shipCatalogue = [];

  const createGrid = () => {
    for (let i = 0; i < 10; i++) {
      grid.push([]);
      for (let j = 0; j < 10; j++) {
        grid[i][j] = { ship: undefined, shipIndex: undefined, hit: null };
      }
    }
    return grid;
  };
  let coordinates = [];
  grid = createGrid();
  const getGrid = () => grid;
  const getMissedShots = () => missedShots;
  const getShips = () => shipCatalogue;

  const validateCell = (x, y) => {
    if (grid[y] === undefined) return false;
    if (grid[y][x] === undefined) return false;

    return true;
  };

  const placeShip = (myShip, x, y, isHorizontal) => {
    if (grid[y][x].ship != undefined || !validateCell(x, y)) {
      return false;
    }

    for (let i = 0; i < myShip.getLength(); i++) {
      // if (!validateCell(x + i,y) || !validateCell(x, y + i)) return false;
      if (isHorizontal) {
        if (!validateCell(x + i, y)) return false;
        if (grid[y][x + i].ship != undefined) return false;
      } else {
        if (!validateCell(x, y + i)) return false;
        if (grid[y + i] === undefined) return false;
        if (grid[y + i][x].ship != undefined) return false;
      }
    }

    shipCatalogue.push(myShip);

    for (let i = 0; i < myShip.getLength(); i++) {
      if (isHorizontal === true) {
        coordinates.push([x + i, y]);
        grid[y][x + i].ship = myShip;
        grid[y][x + i].shipIndex = i;
      } else {
        grid[y + i][x].ship = myShip;
        grid[y + i][x].shipIndex = i;
        coordinates.push([x, y + i]);
      }
    }
  };

  const receiveAttack = (x, y) => {
    let cell = grid[y][x];

    if (cell.ship === undefined) {
      missedShots.push([x, y]);
      cell.hit = false;
      return false;
    } else {
      cell.ship.hit(cell.shipIndex);
      cell.hit = true;
      return true;
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
    getShips,
    validateCell,
  };
};

export { gameboard };

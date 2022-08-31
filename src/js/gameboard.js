
const gameboard = () => {
    let grid;

    const getGrid = () => grid;
    
    const createGrid = () => {
        grid = new Array(10);
        for (let i = 0; i < 10; i++) {
            grid[i] = new Array(10);
        }
        return grid;
    };

    const placeShip = (myShip, x, y, isHorizontal) => {
        for (let i = 0; i < myShip.getLength(); i++){
            (isHorizontal)? (grid[x][y + i] = myShip): (grid[x + i][y] = myShip);
        };
    };

    

    return {createGrid,placeShip, getGrid};

};

export {gameboard};
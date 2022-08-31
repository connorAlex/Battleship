
const gameboard = () => {
    let grid;

    const createGrid = () => {
        grid = new Array(10);
        for (let i = 0; i < 10; i++) {
            grid[i] = new Array(10);
        }
        return grid;
    };

    const placeHorizontalShip = (myShip, x, y) => {
        for (let i = 0; i < myShip.getLength(); i++){
            grid[x][y + i] = myShip;
        };
    };

    const getGrid = () => grid;

    return {createGrid,placeHorizontalShip, getGrid};

};

export {gameboard};
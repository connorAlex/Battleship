
const gameboard = () => {
    
    const createGrid = () => {
        let grid = new Array(10);
        for (let i = 0; i < 10; i++) {
            grid[i] = new Array(10).fill({ship: undefined, shipIndex: undefined});
        }
        return grid;
    };

    let grid = createGrid();
    
    const getGrid = () => grid;

    const placeShip = (myShip, x, y, isHorizontal) => {
        for (let i = 0; i < myShip.getLength(); i++){
            if (isHorizontal) {
                grid[x + i][y].ship = myShip;
                grid[x + i][y].shipIndex = i;
            } else {
                grid[x][y + i].ship = myShip
                grid[x][y + i].shipIndex = i;
            }
            
        };
    };

    const receiveAttack = (x,y) => {
        let cell = grid[x][y];
        if((cell.ship !== undefined)) {
            cell.ship.hit(cell.shipIndex);
        } else{
            return [x,y];
        };
    };

    

    return {createGrid,placeShip, getGrid, receiveAttack};

};

export {gameboard};
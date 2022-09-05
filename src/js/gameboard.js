
const gameboard = () => {
    
    const createGrid = () => {
        //let grid = Array.from(Array(10), () => new Array(10).fill({ship: undefined, shipIndex: undefined}));
        let grid = [];
        for (let i = 0; i < 10; i++) {
            grid.push([]);
            for (let j = 0; j < 10; j++){
                grid[i][j] = {ship: undefined, shipIndex: undefined};
            }
        }
        return grid;
    };
    let grid = createGrid();
    let missedShots = [];
    
    const getGrid = () => grid;

    const placeShip = (myShip, x, y, isHorizontal) => {
        for (let i = 0; i < myShip.getLength(); i++){
            if (isHorizontal === true) {
                grid[y][(x + i)].ship = myShip;
                grid[y][(x + i)].shipIndex = i;
            } else {
                grid[(y + i)][x].ship = myShip
                grid[(y + i)][x].shipIndex = i;
            }
            
        };
    };

    const receiveAttack = (x,y) => {
        let cell = grid[y][x];
        if(cell.ship != undefined) {
            cell.ship.hit(cell.shipIndex);
        } else{
            missedShots.push([x,y]);
        };
    };

    const getMissedShots = () => missedShots;

    return {createGrid,placeShip, getGrid, receiveAttack, getMissedShots};

};

export {gameboard};
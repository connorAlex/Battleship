const gameboard = () => {
    
    const createGrid = () => {
        let grid = new Array(10);
        for (let i = 0; i < 10; i++) {
            grid[i] = new Array(10);
        }
        return grid;
    }

    return {createGrid};

};

export {gameboard};
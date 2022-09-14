
const displayController = () => {

    const updateBoard = (grid) => {
        const boardParent = document.createElement("div");
        for (let i = 0; i < grid.length; i++) {
            let row = document.createElement("div");

            for (let j = 0; j < grid[i].length; j++){
                let cell = document.createElement("div");
                row.appendChild(cell);
            }
            boardParent.appendChild(row);
        }
        return boardParent;

    };



    return {
        updateBoard,
    }
};

export {displayController};
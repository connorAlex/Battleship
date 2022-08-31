const ship = (length) => {

    const positions = new Array(length).fill(0);
    
    const getLength = () => length;

    const hit = (num) => {
        if (num < length) {
            positions[num] = 1;
        }
    }
    
    const isSunk = () => {
        for (let i = 0; i < positions.length; i++) {
            if (positions[i] === 0) {
                return false;
            }
        }
        return true;
    }

    return {hit,getLength, isSunk};
}

export {ship};
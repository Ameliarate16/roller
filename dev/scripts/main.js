const d20 {
    pool: 0
    sides: 20
    roll: () => {
        return Math.floor(Math.random()*20) + 1;
    }
}

const d6 {
    pool: 0
    sides: 6
    roll: () => {
        return Math.floor(Math.random()*6) + 1;
    }
}

$(function() {
    const addDie = dieType => {
        
    }
});
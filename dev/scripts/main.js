const dice = {
    d20: {
        pool: 0,
        sides: 20,
        roll: () => {
            return Math.floor(Math.random()*20) + 1;
        }
    },
    d6: {
        pool: 0,
        sides: 6,
        roll: () => {
            return Math.floor(Math.random()*6) + 1;
        }
    }
}

const addDie = dieSize => {
    for (let die in dice){
        if (die.sides === dieSize) {
            die.pool += 1;
            //update html
            return true;
        }
    }
    return false;
}

const removeDie = dieSize => {
    for (let die in dice){
        if (die.sides === dieSize && die.pool > 0) {
            die.pool -= 1;
            //update html
            return true;
        }

    }
    return false;
}

const roll = () => {
    let total = 0;
    for (let die in dice){
        for (let i = 0; i < die.pool; i++){
            const roll = die.roll();
            total += roll;
            //output roll;
        }
    }
    return total;
}

const reset = () => {
    for (let die in dice){
        die.pool = 0;
        //reset html
    }
}

$(function() {

});
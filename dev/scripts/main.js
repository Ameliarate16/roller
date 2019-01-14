const dice = {
    d20: {
        pool: 0,
        sides: 20
    },
    d6: {
        pool: 0,
        sides: 6
    }
}

const addDie = dieSize => {
    for (let type in dice){
        const die = dice[type];
        if (die.sides === dieSize) {
            die.pool += 1;
            //update html
            return true;
        }
    }
    return false;
}

const removeDie = dieSize => {
    for (let type in dice){
        const die = dice[type];
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
    for (let type in dice){
        const die = dice[type];
        for (let i = 0; i < die.pool; i++){
            const roll = Math.floor(Math.random()*die.sides) + 1;
            total += roll;
            //output roll;
        }
    }
    return total;
}

const reset = () => {
    for (let type in dice){
        const die = dice[type];
        die.pool = 0;
        //reset html
    }
}

$(function() {
    //debugger;
    $("form").on("click", "#rollButton", function(e){
        e.preventDefault();
        const total = roll();
        //output total 
    })
    $("form").on("click", "button.add", function(e){
        e.preventDefault();
        const size = parseInt(this.value); 
        addDie(size);
    })
    $("form").on("click", "button.remove", function(e){
        e.preventDefault();
        const size = parseInt(this.value); 
        removeDie(size);
    })
    $("form").on("click", "#clearButton", function(e){
        e.preventDefault();
        reset();
    })
});
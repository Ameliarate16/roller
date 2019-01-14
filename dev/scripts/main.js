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
            const roll = Math.floor(Math.random()*die.sides) + 1;
            console.log(roll);
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
    $("#rollButton").on("click", function(e){
        e.preventDefault();
        const total = roll();
        console.log(total);
        //output total 
    })
    $(".add").on("click", function(){
        const size = parseInt(this.val); 
        addDie(size);
    })
    $(".remove").on("click", function(){
        const size = parseInt(this.val); 
        removeDie(size);
    })
    $("#clearButton").on("click", function(){
        reset();
    })
});
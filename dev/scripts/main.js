const dice = {
    d20: {
        pool: 0,
        sides: 20
    },
    d6: {
        pool: 0,
        sides: 6
    },
    d8: {
        pool: 0,
        sides: 8
    },
    d10: {
        pool: 0,
        sides: 10
    },
    d12: {
        pool: 0,
        sides: 12
    },
    d100: {
        pool: 0,
        sides: 100
    },
    d4: {
        pool: 0,
        sides: 4
    }
}

const addDie = dieSize => {
    for (let type in dice){
        const die = dice[type];
        if (die.sides === dieSize) {
            die.pool += 1;
            $(`span.${type}`).text(die.pool+type);
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
            $(`span.${type}`).text(die.pool+type);
            return true;
        }

    }
    return false;
}

const roll = () => {
    let total = 0;
    $(".output > span").remove();
    for (let type in dice){
        const die = dice[type];
        for (let i = 0; i < die.pool; i++){
            const roll = Math.floor(Math.random()*die.sides) + 1;
            total += roll;
            $('.output').append(`
                <span class="roll" >[${roll}]</span>
            `)
        }
    }
    return total;
}

const reset = () => {
    for (let type in dice){
        const die = dice[type];
        die.pool = 0;
        $(`span.${type}`).text(die.pool+type);
    }
}

$(function() {
    for (let die in dice) {
        $('br').before(`
            <button class="add ${die}" value="${dice[die].sides}">Add ${die}</button>
            <button class="remove ${die}" value="${dice[die].sides}">Remove ${die}</button>
        `)
        $(".pool").append(`
            <span class="${die}">0${die}</span>
        `)
    }
    //debugger;
    $("form").on("click", "#rollButton", function(e){
        e.preventDefault();
        const total = roll();
        $('.output').append(`
            <span class="total">= ${total}</span>
        `) 
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
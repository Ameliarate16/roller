"use strict";

var dice = {
  d20: {
    pool: 0,
    sides: 20
  },
  d6: {
    pool: 0,
    sides: 6
  }
};

var addDie = function addDie(dieSize) {
  for (var die in dice) {
    if (die.sides === dieSize) {
      die.pool += 1; //update html

      return true;
    }
  }

  return false;
};

var removeDie = function removeDie(dieSize) {
  for (var die in dice) {
    if (die.sides === dieSize && die.pool > 0) {
      die.pool -= 1; //update html

      return true;
    }
  }

  return false;
};

var roll = function roll() {
  var total = 0;

  for (var die in dice) {
    for (var i = 0; i < die.pool; i++) {
      var _roll = Math.floor(Math.random() * die.sides) + 1;

      console.log(_roll);
      total += _roll; //output roll;
    }
  }

  return total;
};

var reset = function reset() {
  for (var die in dice) {
    die.pool = 0; //reset html
  }
};

$(function () {
  $("#rollButton").on("click", function (e) {
    e.preventDefault();
    var total = roll();
    console.log(total); //output total 
  });
  $(".add").on("click", function () {
    var size = parseInt(this.val);
    addDie(size);
  });
  $(".remove").on("click", function () {
    var size = parseInt(this.val);
    removeDie(size);
  });
  $("#clearButton").on("click", function () {
    reset();
  });
});
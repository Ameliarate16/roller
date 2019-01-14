"use strict";

var dice = {
  d20: {
    pool: 0,
    sides: 20,
    roll: function roll() {
      return Math.floor(Math.random() * 20) + 1;
    }
  },
  d6: {
    pool: 0,
    sides: 6,
    roll: function roll() {
      return Math.floor(Math.random() * 6) + 1;
    }
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
      var _roll = die.roll();

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

$(function () {});
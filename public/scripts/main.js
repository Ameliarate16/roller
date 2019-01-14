"use strict";

var dice = {
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
};

var addDie = function addDie(dieSize) {
  for (var type in dice) {
    var die = dice[type];

    if (die.sides === dieSize) {
      die.pool += 1;
      $("span.".concat(type)).text(die.pool + type);
      return true;
    }
  }

  return false;
};

var removeDie = function removeDie(dieSize) {
  for (var type in dice) {
    var die = dice[type];

    if (die.sides === dieSize && die.pool > 0) {
      die.pool -= 1;
      $("span.".concat(type)).text(die.pool + type);
      return true;
    }
  }

  return false;
};

var roll = function roll() {
  var total = 0;
  $(".output > span").remove();

  for (var type in dice) {
    var die = dice[type];

    for (var i = 0; i < die.pool; i++) {
      var _roll = Math.floor(Math.random() * die.sides) + 1;

      total += _roll;
      $('.output').append("\n                <span class=\"roll\" >[".concat(_roll, "]</span>\n            "));
    }
  }

  return total;
};

var reset = function reset() {
  for (var type in dice) {
    var die = dice[type];
    die.pool = 0;
    $("span.".concat(type)).text(die.pool + type);
  }
};

$(function () {
  for (var die in dice) {
    $('br').before("\n            <button class=\"add ".concat(die, "\" value=\"").concat(dice[die].sides, "\">Add ").concat(die, "</button>\n            <button class=\"remove ").concat(die, "\" value=\"").concat(dice[die].sides, "\">Remove ").concat(die, "</button>\n        "));
    $(".pool").append("\n            <span class=\"".concat(die, "\">0").concat(die, "</span>\n        "));
  } //debugger;


  $("form").on("click", "#rollButton", function (e) {
    e.preventDefault();
    var total = roll();
    $('.output').append("\n            <span class=\"total\">= ".concat(total, "</span>\n        "));
  });
  $("form").on("click", "button.add", function (e) {
    e.preventDefault();
    var size = parseInt(this.value);
    addDie(size);
  });
  $("form").on("click", "button.remove", function (e) {
    e.preventDefault();
    var size = parseInt(this.value);
    removeDie(size);
  });
  $("form").on("click", "#clearButton", function (e) {
    e.preventDefault();
    reset();
  });
});
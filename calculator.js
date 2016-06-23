function makeCalculator () {
  var total = 0;
  return {
    getNumber: function () {
      return total;
    },
    add: function (number) {
      total += number;
      return total;
    },
    subtract: function (number) {
      total -= number;
      return total;
    },
    times: function (number) {
      total = total * number;
      return total;
    }
  };
}

var calc = makeCalculator();
console.log(calc.getNumber()); // outputs 0
calc.add(4);
console.log(calc.getNumber()); // outputs 4
calc.subtract(2);
console.log(calc.getNumber()); // outputs 2
calc.times(3);
console.log(calc.getNumber()); // outputs 6

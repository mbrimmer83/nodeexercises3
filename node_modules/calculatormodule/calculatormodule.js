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
module.exports = makeCalculator;

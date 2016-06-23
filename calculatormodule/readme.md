#My Calculator

##install
```
npm install calculatormodule
```
##Usage:
```
var makeCalculator = require('./calculatormodule');

var calc = makeCalculator();
console.log(calc.getNumber()); // outputs 0
calc.add(4);
console.log(calc.getNumber()); // outputs 4
calc.subtract(2);
console.log(calc.getNumber()); // outputs 2
calc.times(3);
console.log(calc.getNumber()); // outputs 6
```

var count = (function makeCounter() {
  var counter = 0;
  return function () {
    return counter++;
  }
}) ();

console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());

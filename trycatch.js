function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('Arguments must be numbers');
  }
  return x + y;
}
try {
  var x = '3';
  var y = '4';
  var addition = add(x, y);
  console.log(addition);
} catch (err) {
  console.log('Caught err:' + err.message);
}

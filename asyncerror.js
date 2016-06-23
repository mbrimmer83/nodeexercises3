function asyncAdd(x, y, callback) {
  setTimeout(function() {
    if (typeof x !== 'number' || typeof y !== 'number') {
      callback(new Error('Arguments must be numbers'));
      return;
    }
    callback(null, x + y);
  }, 1000);
}
try {
  asyncAdd('a', 'b', function(data) {
    console.log("The answer is", data);
  });
} catch (err) {
  console.log('Caught error:', err.message);
}

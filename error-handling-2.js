try {
  var jsonString = '{"name": "Amjad"}';
  var object = JSON.parse(jsonString);
  console.log('Hello, ' + object.name);
} catch (e) {
  console.log('Caught error:', e.message);
}

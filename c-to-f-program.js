var tempConversion = require('./tempconversionmodule');

var tempCelsius = process.argv[2];

console.log('Temperature in Fahrenheit: ' + tempConversion(tempCelsius));

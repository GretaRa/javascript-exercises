const ftoc = function(f) {
 let fullCelsius = (f - 32) * 5 / 9;
 let celsius = Math.round(fullCelsius * 10)/10
 return celsius;
};

const ctof = function(c) {
  let fullFahrenheit = c * 9/5 + 32;
  let fahrenheit= Math.round(fullFahrenheit * 10)/10
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

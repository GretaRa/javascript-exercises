const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let outcome = 0;
  array.forEach(number => {
    outcome += number;
  });
  return outcome;
};

const multiply = function(array) {
  let outcome = 1;
  array.forEach(number => {
    outcome *= number;
  });
  return outcome;
};

const power = function(num1, power) {
	return Math.pow(num1, power);
};

const factorial = function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

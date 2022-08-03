const sumAll = function (a, b) {
    if (a < 0 || b < 0) return 'ERROR';
    if (isNaN(a) || isNaN(b)) return 'ERROR';
    if (typeof(a) == "string"|| typeof(b) == "string") return 'ERROR';

    let myArray = [];
    for (let i = Math.min(a,b); i <= Math.max(a,b); i++){
        myArray.push(i)
    }

    let total = myArray.reduce((previousValue, currentValue) => previousValue + currentValue, 0
  );
  return total;
};

// Do not edit below this line
module.exports = sumAll;


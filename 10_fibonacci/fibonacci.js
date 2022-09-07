const fibonacci = function(num) {
    let num1 = 1;
    let num2 = 1;
    let num3 = 0;
    if (num < 0){
        return 'OOPS';
    }
    if (num === 0) return 0;
    if (num == 1 || num == 2){
        return 1;
    }
    for (let i = 2; i< num; i++){
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    } 
    return num3;
};

// Do not edit below this line
module.exports = fibonacci;

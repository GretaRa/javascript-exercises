const repeatString = function(string, num) {
    if (num >= 0){
        for (let i = 0; i <= num; i++){
            let result = string.repeat(num);
            return result;
        }
    } else{
        return 'ERROR';
    }
    
};
repeatString('hey', 3)
// Do not edit below this line
module.exports = repeatString;

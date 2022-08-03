const reverseString = function(string) {
    let charArray = Array.from(string);
    charArray = charArray.reverse();
    let reversedString = charArray.join("");
    return reversedString;
};


// Do not edit below this line
module.exports = reverseString;

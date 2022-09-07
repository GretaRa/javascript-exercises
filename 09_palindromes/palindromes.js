const palindromes = function (testString) {
    const noSpecialCharacters = testString.toLowerCase().replace(/[^A-Z0-9]/ig, '');
    console.log(noSpecialCharacters);
    
    let splitString = noSpecialCharacters.split("");
    let reverseArray = splitString.reverse();
    let reversedString = reverseArray.join("");

    console.log(reversedString);
    return noSpecialCharacters === reversedString;

};

// Do not edit below this line
module.exports = palindromes;

const removeFromArray = function(arr) {
    let removes = Array.prototype.slice.call(arguments, 1);
    return arr.filter(function(item) {
        return removes.indexOf(item) === -1;
    });
};

// Do not edit below this line
module.exports = removeFromArray;

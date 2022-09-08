const findTheOldest = function(Array) {
    const oldest = Array.sort(function(a,b){
        const lastGuy = age1(a);

        const nextGuy = age2(b);

        return lastGuy > nextGuy  ? -1:1;
        });
        return oldest[0];
}; 

const age1 = function (a){
    const currentYear = new Date();
    let year = currentYear.getFullYear();
    if (a.yearOfDeath == undefined){
    return (year - a.yearOfBirth); 
} else {
    return (a.yearOfDeath - a.yearOfBirth);
}
};

const age2 = function(b){
    const currentYear = new Date();
    let year = currentYear.getFullYear();
    if(b.yearOfDeath == undefined){
        return (year - b.yearOfBirth);
    } else {
        return (b.yearOfDeath - b.yearOfBirth);
    };
}
// Do not edit below this line
module.exports = findTheOldest;

const repeatString = function(str,num) {
    newString = '';
    if(num < 0) return "ERROR";
    for(let i = 1;i<=num;i++){
        newString += str;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;

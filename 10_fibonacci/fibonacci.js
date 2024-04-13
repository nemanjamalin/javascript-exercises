const fibonacci = function(number) {
    number = +number;
    if(number ===0) return 0;
    if(number < 0) return "OOPS";
    if(number === 1 || number === 2) return 1;
    let fibonacci = [1,1];
    for(let i = 2;i<number;i++){
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    return fibonacci[number-1];

};

// Do not edit below this line
module.exports = fibonacci;

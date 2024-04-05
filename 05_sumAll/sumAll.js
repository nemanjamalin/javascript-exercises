function nonValid(num){
    if (num < 0 || typeof num!=='number') return true;
    return false;
}

const sumAll = function(num1,num2) {
    const lowerNumber = num1<num2? num1 : num2;
    const largerNumber = lowerNumber === num1 ? num2 : num1;
    let sum = 0;

    if(nonValid(lowerNumber) || nonValid(largerNumber)) return 'ERROR';
    for(let i=lowerNumber;i<=largerNumber;i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

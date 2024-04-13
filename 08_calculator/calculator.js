const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(numbers) {
	if(numbers.length === 0) return 0;
  return numbers.reduce((acc,number)=>acc+number,0); 
};

const multiply = function(numbers) {
  if(numbers.length === 0) return 0;
  return numbers.reduce((acc,number)=>acc*number,1); 
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(number) {
	if(number === 0 || number === 1) return 1;
  let factorial = 1;
  for(let i=2;i<=number;i++){
    factorial = factorial * i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

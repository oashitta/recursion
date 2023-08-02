// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

function power(base, exponent){
  if (exponent === 0) return 1;
  
  return base * power(base, exponent - 1)
  // this function is returning the value of base multiplied by the return value of the recursive call of 'power(base, exponent -1)'
}


console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4 
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1
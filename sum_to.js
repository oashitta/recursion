// for loop
const sumTo = function (num) {
  // we want to add each number up till the number given and return the sum.
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumTo(100))

// using recursion - i.e. a function that calls itself
const sumTo2 = function(num) {
  if (num === 1){
    return 1
  }

  return num + sumTo2(num - 1)
}

console.log(sumTo2(100))


// another recursive function example.
// fotal is set to 0 in the function paramenter becasue if a variable is set within, it'll only be available to the first call and not all the recursive calls. 
function sumRangeRecursive(n, total = 0) {
  // guard clause which exits out of the function. 
  if (n <= 0) {
    return total
  }
  return sumRangeRecursive(n-1, total + n)
}
console.log(sumRangeRecursive(100))



// using arithmetic formula
function sumTo3(num) {
  return num * (num + 1) / 2;
}

console.log( sumTo3(100) );



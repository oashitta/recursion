function factorial(n){
  // base case/exit case
if (n === 1 || n === 0){
  return 1
}
// recursion
  return n * factorial(n - 1)
}

// alternatively, using tenary operator
function factorial2(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

// 5! = 5 factorial = 5 * 4 * 3 * 2 * 1
console.log(factorial(5));
console.log(factorial2(5));
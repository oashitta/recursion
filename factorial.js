function factorial(n){
if (n === 1){
  return 1
}
  return n * factorial(n - 1)
}

// alternatively, using tenary operator
function factorial2(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}


console.log(factorial(5));
console.log(factorial2(5));
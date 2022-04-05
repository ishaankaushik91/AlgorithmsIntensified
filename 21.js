function factorial(number) {
  if (number >= 1) {
    return number * factorial(number - 1);
  }
  return 1;
}

console.log(makePrime(factorial(5)));

function makePrime(number) {
  if (primeCheck(2, number) == 0) {
    return makePrime(number + 1);
  }
  return number;
}

function primeCheck(start, number) {
  if (start < number) {
    if (number % start == 0) {
      return 0;
    }
    return primeCheck(start + 1, number);
  }
  return 1;
}

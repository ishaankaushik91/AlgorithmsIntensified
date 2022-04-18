PrimeBreak(10);

function PrimeBreak(number) {
  for (let j = 2; j < number; j++) {
    for (let k = 2; k < number; k++) {
      if (number == j + k && PrimeCheck(j) && PrimeCheck(k)) {
        console.log(j, k);
        break;
      }
    }
  }
}

function PrimeCheck(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return 0;
    }
  }
  return 1;
}

PrimeBreak(2, 2, 10);

function PrimeCheck(start, number) {
  if (start < number) {
    if (number % start == 0) {
      return 0;
    }
    return PrimeCheck(start + 1, number);
  }
  return 1;
}

function PrimeBreak(start, mid, number) {
  if (start < number) {
    if (mid < number) {
      if (start + mid == number && PrimeCheck(2, start) && PrimeCheck(2, mid)) {
        console.log(start, mid);
      }
      return PrimeBreak(start, mid + 1, number);
    }
    mid = 2;
    return PrimeBreak(start + 1, mid, number);
  }
}

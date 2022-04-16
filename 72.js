let array = [1, 2, 3, 32, 32, 100, 101, 32];
Summation(0, array, 0, 1);

function Summation(index, array, sum, k) {
  if (index < array.length) {
    if (k <= array[index]) {
      if (array[index] % k == 0 && PrimeCheck(2, k)) {
        sum += k;
        return Summation(index, array, sum, k + 1);
      }
      return Summation(index, array, sum, k + 1);
    }
    console.log(sum);
    sum = 0;
    k = 1;
    return Summation(index + 1, array, sum, k);
  }
}

function PrimeCheck(start, number) {
  if (start < number) {
    if (number % start == 0) {
      return 0;
    }
    return PrimeCheck(start + 1, number);
  }
  return 1;
}

let matrix = [
  [1, 10, 32, 33, 101],
  [90, 88, 78, 11, 312],
  [23, 198, 10, 878, 90],
];
Summation(0, 0, matrix);

function Summation(index, j, matrix) {
  if (index < matrix.length) {
    if (j < matrix[index].length) {
      let sum = 0;
      for (let i = 1; i <= matrix[index][j]; i++) {
        if (matrix[index][j] % i == 0 && PrimeCheck(2, i)) {
          sum += i;
        }
      }
      console.log(sum);
      return Summation(index, j + 1, matrix);
    }
    j = 0;
    sum = 0;
    return Summation(index + 1, j, matrix);
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

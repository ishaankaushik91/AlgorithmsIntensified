let matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 14],
];
RowSum(0, 0, matrix, 0);

function RowSum(index, j, matrix, sum) {
  if (j < matrix[0].length) {
    if (index < matrix.length) {
      sum += matrix[index][j];
      return RowSum(index + 1, j, matrix, sum);
    }
    console.log(sum);
    sum = 0;
    index = 0;
    return RowSum(index, j + 1, matrix, sum);
  }
}

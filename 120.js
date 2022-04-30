let matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 14],
];
RowSum(matrix);

function RowSum(matrix) {
  for (let i = 0; i < matrix[0].length; i++) {
    let sum = 0;
    for (let j = 0; j < matrix.length; j++) {
      sum += matrix[j][i];
    }
    console.log(sum);
  }
}

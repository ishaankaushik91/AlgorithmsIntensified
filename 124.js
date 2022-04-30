let matrix = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
];
bump(0, 0, matrix, 0, "");

function bump(index, j, matrix, k, str) {
  if (index < matrix.length) {
    if (j < matrix[index].length) {
      if (k >= 0) {
        str += String(matrix[index][k]) + " ";
        return bump(index, j, matrix, k - 1, str);
      }
      console.log(str);
      k = j;
      str = "";
      return bump(index, j + 1, matrix, k, str);
    }
    j = 0;
    return bump(index + 1, j, matrix, k, str);
  }
}

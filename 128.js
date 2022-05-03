let matrix = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
];
jump(0, 0, 0, matrix, "");

function jump(index, j, k, matrix, str) {
  if (index < matrix.length) {
    if (j < matrix[index].length) {
      if (k < matrix[index].length) {
        str += String(matrix[index][k]) + " ";
        return jump(index, j, k + 1, matrix, str);
      }
      console.log(str);
      str = "";
      k = j;
      return jump(index, j + 1, k, matrix, str);
    }
    j = 0;
    return jump(index + 1, j, k, matrix, str);
  }
}

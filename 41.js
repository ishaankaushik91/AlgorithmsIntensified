let matrix = [
  [1, 12, 12, 1, 1, 1, 1, 1, 12],
  [12, 201, 21001, 1212, 12, 12, 12],
  [2127812, 12, 271, 12, 12, 12, 12, 12, 289, 182, 1728],
  [10, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

most(0, matrix, 0, 0, 0, 0);

function most(index, matrix, j, count, numbers, row) {
  if (index < matrix.length) {
    if (j < matrix[index].length) {
      if (matrix[index][j] == 12) {
        count++;
        return most(index, matrix, j + 1, count, numbers, row);
      }
      return most(index, matrix, j + 1, count, numbers, row);
    }
    if (numbers < count) {
      numbers = count;
      row = index;
      j = 0;
      count = 0;
      return most(index + 1, matrix, j, count, numbers, row);
    }
    j = 0;
    count = 0;
    return most(index + 1, matrix, j, count, numbers, row);
  }
  console.log(row, numbers);
}

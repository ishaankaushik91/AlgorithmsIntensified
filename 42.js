let array = [10, 10, 5, 12, 8, 100];

console.log(all(0, array, 0));

function all(index, array, count) {
  if (index < array.length) {
    let sum = 0;
    for (let j = index + 1; j < array.length; j++) {
      sum = array[index];
      sum += array[j];
      if (sum == 20) {
        count++;
        return all(index + 1, array, count);
      }
    }
    return all(index + 1, array, count);
  }
  return count;
}

let array = [1, 10, 290, 90, 11, 89, 12, 21, 980, 90];
console.log(sumOfAll(0, array, 0));

function sumOfAll(index, array, sum)
{
    if (index < array.length)
    {
        sum += array[index];
        return sumOfAll(index + 1, array, sum);
    }
    return sum;
}
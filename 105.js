let array = [1, 10, 290, 90, 11, 89, 12, 21, 980, 90];
console.log(sumOfAll(0, array));

function sumOfAll(index, array)
{
    if (index < array.length)
    {
        return array[index] + sumOfAll(index + 1, array);
    }
    return 0;
}
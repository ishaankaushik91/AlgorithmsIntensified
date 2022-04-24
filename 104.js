let array = [1, 10, 290, 90, 11, 89, 12, 21, 980, 90];
console.log(sumOfAll(array));

function sumOfAll(array)
{
    sum = 0;
    for (let i = 0; i < array.length; i++)
    {
        sum += array[i];
    }
    return sum;
}
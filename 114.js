let array = [1, 2, 3, 4, 5, 6, 8, 9, 10];
console.log(ComboSum(0, array.length - 1, array, 0));

function ComboSum(index, j, array, sum)
{
    if (index < array.length/2)
    {
        sum += (array[index] + array[j]);
        return ComboSum(index + 1, j - 1, array, sum);
    }
    return sum;
}
let array = [1, 2, 3, 4, 5, 6, 8, 9, 10];
console.log(ComboSum(array));

function ComboSum(array)
{
    let j = array.length - 1, sum = 0;
    for (let i = 0; i < array.length/2; i++)
    {
        sum += array[i] + array[j];
        j--;
    }
    return sum;
}
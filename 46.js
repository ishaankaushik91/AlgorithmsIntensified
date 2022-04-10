let array = [1, -2, 32, -10, 78];
console.log(Summation(array));

function Summation(array)
{
    let sum = 0;
    for (let i = 0; i < array.length; i++)
    {
        if (array[i] < 0)
        {
            sum += array[i];
        }
    }
    return sum;
}
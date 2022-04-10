let array = [1, -2, 32, -10, 78];
console.log(Summation(0, array));

function Summation(index, array)
{
    if (index < array.length)
    {
        if (array[index] < 0)
        {
            return array[index] + Summation(index + 1, array);
        }
        return Summation(index + 1, array);
    }
    return 0;
}
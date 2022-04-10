let array = [1, -2, -2, -3];
console.log(frequency(0, array, 0));

function frequency(index, array, count)
{
    if (index < array.length)
    {
        if (array[index] < 0)
        {
            return frequency(index + 1, array, count + 1);
        }
        return frequency(index + 1, array, count);
    }
    return count;
}
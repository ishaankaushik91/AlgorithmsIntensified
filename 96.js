let array = [43, 22, 12, 21, 11, 121, 11, 21, 90];

function Summaton(index, array, sum)
{
    if (index < array.length)
    {
        if (array[index] < array[index + 1])
        {
            sum -= array[index + 1];
            return Summaton(index + 1, array, sum);
        }
        sum += array[index];
        return Summaton(index + 1, array, sum);
    }
}
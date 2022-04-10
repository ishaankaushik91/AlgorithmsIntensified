let array = [-2, -2, -2, 1, 1, 1, 1, 1, -3, 12];
duplicates(0, array, 1);

function duplicates(index, array)
{
    if (index < array.length)
    {
        for (let j = index + 1; j < array.length; j++)
        {
            if (array[index] == array[j] && array[index] < 0)
            {
                console.log(array[index]);
                break;
            }
        }
        return duplicates(index + 1, array);
    }
}
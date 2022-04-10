let array = [1, 2, 3, -2, 5, -1, -2, -3, -4];
duplicates(array);

function duplicates(array)
{
    for (let i = 0; i < array.length; i++)
    {
        for (let j = i + 1; j < array.length; j++)
        {
            if (array[i] == array[j] && array[i] < 0)
            {
                console.log(array[i]);
                break;
            }
        }
    }
}
let array = [2, 3, 4, 4, 3, 2, 1, 5, 6, 7, 8];
deletion(array);

function deletion(array)
{
    let target = 5;
    for (let i = 0; i < array.length; i++)
    {
        if (i == target)
        {
            for (let j = i; j < array.length; j++)
            {
                array[j] = array[j + 1];
            }
            break;
        }
    }
    console.log(array);
}
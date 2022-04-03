let array = [1, 2, 3, 4, 5, 7, 8, 9];
insertion(array, 5, 6);

function insertion(array, target, element)
{
    for (let i = 0; i < array.length; i++)
    {
        if (i == target)
        {
            for (let j = array.length - 1; j >= target; j--)
            {
                array[j + 1] = array[j];
            }
            break;
        }
    }
    array[target] = element;
    console.log(array);
}
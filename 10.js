let array = [2, 3, 4, 4, 3, 2, 1, 5, 6, 7, 8];
deletion(0, array,6);

function deletion(index, array, target)
{
    if (index < array.length)
    {
        if (index == target)
        {
            array[index] = array[index + 1];
            target++;
            return deletion(index + 1, array, target);
        }
        return deletion(index + 1, array, target);
    }
    console.log(array);
}
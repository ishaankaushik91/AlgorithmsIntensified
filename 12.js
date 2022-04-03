let array = [1, 2, 3, 4, 5, 7, 8, 9];
insertion(0, array, 5, 6);

function insertion(index, array, target, element)
{
    if (index < array.length)
    {
        if (index == target)
        {
            insert(array.length - 1, array, target, element);
            return;
        }
        return insertion(index + 1, array, target, element);
    }
}

function insert(pos, array, target, element)
{
    if (pos >= target)
    {
        array[pos + 1] = array[pos];
        return insert(pos - 1, array, target, element);
    }
    array[target] = element;
    console.log(array);
}
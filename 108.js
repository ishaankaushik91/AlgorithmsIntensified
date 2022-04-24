let array = [1, 10, 290, 90, 11, 89, 12, 21, 980, 90];
WierdTraversal(0, array);

function WierdTraversal(index, array)
{
    if (index < array.length)
    {
        console.log(array[index], array[index + 1]);
        return WierdTraversal(index + 2, array);
    }
}
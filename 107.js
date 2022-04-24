let array = [1, 10, 290, 90, 11, 89, 12, 21, 980, 90];
WierdTraversal(array);

function WierdTraversal(array)
{
    for (let i = 0; i < array.length; i+=2)
    {
        console.log(array[i], array[i + 1]);
    }
}
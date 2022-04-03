let array = [2, 3, 4, 5, -1, 0];
console.log(maxProduct(array));

function maxProduct(array)
{
    let previous = 1, number = 0;
    for (let i = 0; i < array.length; i++)
    {
        if (number < previous)
        {
            number = previous;
        }
        previous *= array[i];
    }
    return number;
}
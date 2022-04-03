let array = [2, 3, 4, 5, -1, 0];
console.log(maxProduct(0, array, 0, 1));

function maxProduct(index, array, number, previous)
{
    if (index < array.length)
    {
        previous *= array[index];
        if (number < previous)
        {
            number = previous;
            return maxProduct(index + 1, array, number,previous);
        }
        return maxProduct(index + 1, array, number, previous);
    }
    return number;
}
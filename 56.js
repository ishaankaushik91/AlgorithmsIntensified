let array = [1, -2, -3, 10, -45, 80, 87, -55];
console.log(largetsNegativeDuplicate(0, array, -100000000));

function largetsNegativeDuplicate(index, array, number)
{
    if (index < array.length)
    {
        if (number < array[index] && array[index] < 0)
        {
            number = array[index];
            return largetsNegativeDuplicate(index + 1, array, number);
        }
        return largetsNegativeDuplicate(index + 1, array, number);
    }
    return number;
}
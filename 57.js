let array = [1, -2, -3, 10, -45, 80, 87, -55];
console.log(largetsNegativeDuplicate(array));

function largetsNegativeDuplicate(array)
{
    let number = -1000000;
    for (let i = 0; i < array.length; i++)
    {
        if (number < array[i] && array[i] < 0)
        {
            number = array[i];
        }
    }
    return number;
}
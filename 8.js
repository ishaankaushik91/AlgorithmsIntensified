function primeCheck(start, number)
{
    if (start < number)
    {
        if (number % start == 0)
        {
            return 0;
        }
        return primeCheck(start + 1, number);
    }
    return 1;
}

function filtering(array, array2)
{
    for (let i = 0; i < array.length; i++)
    {
        if (primeCheck(2, array[i]))
        {
            array2.push(array[i]);
        }
    }
    console.log(array2);
}
let array = [1, 2, 3, 4, 5, 6, 7, 8];
filtering(array, []);
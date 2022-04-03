let array = [ 11, 13, 17, 19];

for (let i = 0; i < array.length; i++)
{
    for (let j = 0; j < array.length; j++)
    {
        if (primeCheck(2, array[i]))
        {
            for (let k = i; k < array.length; k++)
            {
                array[k] = array[k + 1];
            }
        }
    }
}

console.log(array);

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
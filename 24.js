function factorialCheck(start, number)
{
    if (start < number)
    {
        if (factorial(start) == number)
        {
            return start;
        }
        return factorialCheck(start + 1, number);
    }
}

function factorial(number)
{
    if (number >= 1)
    {
        return number * factorial(number - 1);
    }
    return 1;
}

console.log(factorialCheck(1, 120));
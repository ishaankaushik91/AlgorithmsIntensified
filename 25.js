function makeFactorial(number)
{
    if (factorialCheck(1, number) == 0)
    {
        return makeFactorial(number + 1);
    }
    return number;
}

function factorialCheck(start, number)
{
    if (start < number)
    {
        let pi = 1;
        for (let i = 1; i <= start; i++)
        {
            pi *= i;
        }
        if (pi == number)
        {
            return start;
        }
        return factorialCheck(start + 1, number);
    }
    return 0;
}

console.log(makeFactorial(100));
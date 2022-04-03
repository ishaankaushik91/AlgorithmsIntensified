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

function generate(num1, num2)
{
    if (primeCheck(2, num1) == 1 && primeCheck(2, num2) == 0)
    {
        return generate(num1, num2 + 1);
    }
    console.log(num1, num2);
}

generate(11, 222);
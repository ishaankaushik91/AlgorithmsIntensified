function divisors(number)
{
    for (let i = 1; i <= number; i++)
    {
        if ((number % i == 0) && PrimeCheck(i))
        {
            console.log(i);
        }
    }
}

function PrimeCheck(number)
{
    for (let j = 2; j < number; j++)
    {
        if (number % j == 0)
        {
            return 0;
        }
    }
    return 1;
}

divisors(10);
function divisors(start, number)
{
    if (start <= number)
    {
        if ((number % start == 0) && PrimeCheck(2, start))
        {
            console.log(start);
            return divisors(start + 1, number);
        }
        return divisors(start + 1, number);
    }
}

function PrimeCheck(start, number)
{
    if (start < number)
    {
        if (number % start == 0)
        {
            return 0;
        }
        return PrimeCheck(start + 1, number);
    }
    return 1;
}

divisors(1, 10);
function divisors(number)
{
    for (let i = 1; i <= number; i++)
    {
        if (number % i == 0)
        {
            console.log(i);
        }
    }
}

divisors(10);
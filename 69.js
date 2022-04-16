function divisors(number, start)
{
    if (start <= number)
    {
        if (number % start == 0)
        {
            console.log(start);
            return divisors(number, start + 1);
        }
        return divisors(number, start + 1);
    }
}

divisors(10, 1);
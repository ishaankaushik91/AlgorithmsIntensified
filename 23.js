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
    return "none";
}

console.log(factorialCheck(1, 120));
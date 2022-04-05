function factorialCheck(number)
{
    for (let i = 1; i < number; i++)
    {
        let pi = 1;
        for (let j = 1; j <= i; j++)
        {
            pi *= j;
        }
        if (pi == number)
        {
            return i;
        }
    }
}

console.log(factorialCheck(120));
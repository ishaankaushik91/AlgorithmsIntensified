let array = [1, 2, 3, 32, 32, 100, 101, 32];
Summation(array);

function Summation(array)
{
    for (let index = 0; index < array.length; index++)
    {
        let sum = 0;
        for (let j = 1; j <= array[index]; j++)
        {
            if (array[index] % j == 0 && PrimeCheck(j))
            {
                sum += j;
            }
        }
        console.log(sum);
    }
}

function PrimeCheck(number)
{
    for (let i = 2; i < number; i++)
    {
        if (number % i == 0)
        {
            return 0;
        }
    }
    return 1;
}
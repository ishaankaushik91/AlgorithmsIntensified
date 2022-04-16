let matrix = [
    [1, 10, 32, 33, 101],
    [90, 88, 78, 11, 312],
    [23, 198, 10, 878, 90],
  ];
Summation(matrix);

function Summation(matrix)
{
    for (let j = 0; j < matrix.length; j++)
    {
        for (let k = 0; k < matrix[j].length; k++)
        {
            let sum = 0;
            for (let l = 1; l <= matrix[j][k]; l++)
            {
                if (matrix[j][k] % l == 0 && PrimeCheck(2, l))
                {
                    sum += l;
                }
            }
            console.log(sum);
        }
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
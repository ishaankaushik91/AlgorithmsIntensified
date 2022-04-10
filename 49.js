let matrix = [
    [1, 2, 3, -100, -100, , 200 + 300],
    [700, -5621],
    [21, 21, 21, 21, 0]
];
console.log(Summation(matrix));

function Summation(matrix)
{
    let sum = 0;
    for (let i = 0; i < matrix.length; i++)
    {
        for (let j = 0; j < matrix[i].length; j++)
        {
            if (matrix[i][j] < 0)
            {
                sum += matrix[i][j];
            }
        }
    }
    return sum;
}
let matrix = [
    [1, 2, 3, -100, -100, , 200 + 300],
    [700, -5621],
    [21, 21, 21, 21, 0]
];
Summation(matrix);

function Summation(matrix)
{
    for (let i = 0; i < matrix.length; i++)
    {
        let sum = 0;
        for (let j = 0; j < matrix[i].length; j++)
        {
            if (matrix[i][j] < 0)
            {
                sum += matrix[i][j];
            }
        }
        console.log(sum);
    }
}
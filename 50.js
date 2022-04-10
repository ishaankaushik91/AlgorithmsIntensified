let matrix = [
    [1, 2, 3, -100, -100, , 200 + 300],
    [700, -5621],
    [21, 21, 21, 21, 0]
];
Summation(0, matrix, 0, 0);

function Summation(index, matrix, j, sum)
{
    if (index < matrix.length)
    {
        if (j < matrix[index].length)
        {
            if (matrix[index][j] < 0)
            {
                sum += matrix[index][j];
                return Summation(index, matrix, j + 1, sum);
            }
            return Summation(index, matrix, j + 1, sum);
        }
        console.log(sum);
        j = 0;
        sum = 0;
        return Summation(index + 1, matrix, j, sum);
    }
}
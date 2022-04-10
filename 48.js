let matrix = [
    [1, 2, 3, -100, -100, , 200 + 300],
    [700, -5621],
    [21, 21, 21, 21, 0]
];
console.log(Summation(0, matrix, 0));

function Summation(index, matrix, j)
{
    if (index < matrix.length)
    {
        if (j < matrix[index].length)
        {
            if (matrix[index][j] < 0)
            {
                return matrix[index][j] + Summation(index, matrix, j + 1);
            }
            return Summation(index, matrix, j + 1);
        }
        j = 0;
        return Summation(index + 1, matrix, j);
    }
    return 0;
}
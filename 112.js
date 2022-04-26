let matrix = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18]
];
lastToFirst(0, matrix[0].length - 1, matrix);

function lastToFirst(index, j, matrix)
{
    if (j >= 0)
    {
        if (index < matrix.length)
        {
            console.log(matrix[index][j]);
            return lastToFirst(index + 1, j, matrix);
        }
        index = 0;
        return lastToFirst(index, j - 1, matrix);
    }
}
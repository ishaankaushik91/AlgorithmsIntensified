let matrix = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18]
];
lastToFirst(matrix);

function lastToFirst(matrix)
{
    for (let j = matrix[0].length - 1; j >= 0; j--)
    {
        for (let i = 0; i < matrix.length; i++)
        {
            console.log(matrix[i][j]);
        }
    }
}
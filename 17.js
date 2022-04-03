let matrix = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
];

sine(0, matrix, 0);

function sine(column, matrix, row)
{
    if (column < 3)
    {
        if (row < 3)
        {
            console.log(matrix[row][column]);
            return sine(column, matrix, row + 1);
        }
        row = 0;
        return sine(column + 1, matrix, row);
    }
}
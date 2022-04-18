let matrix = [
    [1, 8, 9, 13],
    [2, 7, 10, 14],
    [3, 6, 11, 15],
    [4, 5, 12, 16]
];
Printing(0, 0, matrix);

function Printing(index, j , matrix)
{
    if (j < matrix[0].length)
    {
        if (index < matrix.length)
        {
            console.log(matrix[index][j]);
            return Printing(index + 1, j, matrix);
        }
        index = 0;
        return Printing(index, j + 1, matrix);
    }
}
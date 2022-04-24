let matrix = [
    [1, 2, 3, 4],
    [6, 7, 8, 9],
    [11, 12, 13, 14]
];
WeirdTraversal(0, 0, matrix);

function WeirdTraversal(index, j, matrix)
{
    if (index < matrix.length)
    {
        if (j < matrix[index].length)
        {
            console.log(matrix[index][j], matrix[index][j + 1]);
            return WeirdTraversal(index, j + 2, matrix);
        }
        j = 0;
        return WeirdTraversal(index + 1, j, matrix);
    }
}
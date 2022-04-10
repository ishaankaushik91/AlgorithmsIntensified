let matrix = [
    [1, 1, 2, 1, 3, 1, 1, 1, 3, 1, 1, 1],
    [10, 12, 10, 20, 10]
];

duplicates(0, matrix, 0);

function duplicates(index, matrix, j)
{
    if (index < matrix.length)
    {
        if (j < matrix[index].length)
        {
            for (let k = j + 1; k < matrix[index].length; k++)
            {
                if (matrix[index][j] == matrix[index][k])
                {
                    console.log(matrix[index][j]);
                    return duplicates(index, matrix, j + 1);
                }
            }
            return duplicates(index, matrix, j + 1);
        }
        j = 0;
        return duplicates(index + 1, matrix, j);
    }
}
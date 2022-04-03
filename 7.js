function traversal(index, matrix, j)
{
    if (index < matrix.length)
    {
        if (j < matrix[index].length)
        {
            console.log(matrix[index][j]);
            return traversal(index, matrix, j + 1);
        }
        j = 0;
        return traversal(index + 1, matrix, j);
    }
}

let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

traversal(0, matrix, 0);
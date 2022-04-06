let matrix = [
    [1, 2, 3, 4],
    [9, 10, 11, 12]
];

insertion(matrix, 1, [5, 6, 7, 8]);

function insertion(matrix, position, row)
{
    for (let i = 0; i < matrix.length; i++)
    {
        if (i == position)
        {
            for (let j = matrix.length - 1; j >= position; j--)
            {
                matrix[j + 1] = matrix[j];
            }
            matrix[position] = row;
            console.log(matrix);
            return;
        }
    }
}
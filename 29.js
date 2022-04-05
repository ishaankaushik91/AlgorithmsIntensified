let matrix = [
    [1, 2, 4],
    [5, 6, 8],
    [9, 10, 12]
];

insertion(0, matrix, 0, 3);

function insertion(index, matrix, j, theNumber)
{
    if (index < matrix.length)
    {
        if (j < matrix[index].length)
        {
            if (j == 2)
            {
                for (let k = matrix[index].length; k >= 2; k--)
                {
                    matrix[index][k + 1] = matrix[index][k];
                }
                matrix[index][2] = theNumber;
                theNumber += 4;
                return insertion(index, matrix, j + 1, theNumber);
            }
            return insertion(index, matrix, j + 1, theNumber);
        }
        j = 0;
        return insertion(index + 1, matrix, j, theNumber);
    }
    console.log(matrix);
}
let matrix = [
    [1, 2, 4],
    [5, 6, 8],
    [9, 10, 12]
];

insertion(0, matrix);

function insertion(index, matrix)
{
    let theNumber = 3;
    for (let i = 0; i < matrix.length; i++)
    {
        for (let j = 0; j < matrix[i].length; j++)
        {
            if (j == 2)
            {
                for (let k = matrix[i].length - 1; k >= 2; k--)
                {
                    matrix[i][k + 1] = matrix[i][k]; 
                }
                matrix[i][2] = theNumber;
                theNumber += 4;
            }
        }
    }
    console.log(matrix);
}
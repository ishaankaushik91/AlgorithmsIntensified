let matrix = [
    [1, 2, 3, 4],
    [6, 7, 8, 9],
    [11, 12, 13, 14]
];
WeirdTraversal(matrix);

function WeirdTraversal(matrix)
{
    for (let i = 0; i < matrix.length; i++)
    {
        for (let j = 0; j < matrix[i].length; j+=2)
        {
            console.log(matrix[i][j], matrix[i][j + 1]);
        }
    }
}
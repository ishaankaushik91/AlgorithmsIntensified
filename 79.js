let matrix = [
    [1, 8, 9, 13],
    [2, 7, 10, 14],
    [3, 6, 11, 15],
    [4, 5, 12, 16]
];
Printing(matrix);

function Printing(matrix)
{
    for (let i = 0; i < matrix[0].length; i++)
    {
        for (let j = 0; j < matrix.length; j++)
        {
            console.log(matrix[j][i]);
        }
    }
}
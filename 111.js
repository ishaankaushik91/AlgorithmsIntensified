let matrix = [
    [1, 2, 3, 4],
    [6, 7, 8, 9],
    [11, 12, 13, 14],
    [16, 18, 20, 21],
    [1, 2, 3, 4],
    [6, 7, 8, 9],
    [11, 12, 13, 14],
    [16, 18, 20, 21]
];
Zebra(matrix);

function Zebra(matrix)
{   
    for (let i = 0; i < matrix.length; i++)
    {
        if (i == 0)
        {
            for (let j = 3; j >= 0; j--)
            {
                console.log(matrix[i][j]);
            }
        }
        else if (i == 1)
        {
            for (let j = 0; j < matrix[i].length; j++)
            {
                console.log(matrix[i][j]);
            }
        }
        else if (i % 2 == 0)
        {
            for (let j = 3; j >= 0; j--)
            {
                console.log(matrix[i][j]);
            }
        }
        else
        {
            for (let j = 0; j < matrix[i].length; j++)
            {
                console.log(matrix[i][j]);
            }
        }

    }
}
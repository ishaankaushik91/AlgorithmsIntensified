let matrix = [
    [1, 2, 3, -2, 12],
    [21, 10, -110, -9],
    [-21, 21, -90, -89],
    [1, 1, 1, 1, 1]
];
frequency(matrix);

function frequency(matrix)
{
    for (let i = 0; i < matrix.length; i++)
    {
        let count = 0;
        for (let j = 0; j < matrix[i].length; j++)
        {
            if (matrix[i][j] < 0)
            {
                count++;
            }
        }
        console.log(count);
    }
}
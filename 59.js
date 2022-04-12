let matrix = [
    [1, 1, -10, -9, -8, -7, 7, 8, 9],
    [10, 70, -70, -80, -9],
    [12, 21, -98, -78],
    [90, -7, -500, -2]
];
largetsNegativeDuplicate(matrix);

function largetsNegativeDuplicate(matrix)
{
    for (let i = 0; i < matrix.length; i++)
    {
        let number = -100000000;
        for (let j = 0; j < matrix[i].length; j++)
        {
            if (number < matrix[i][j] && matrix[i][j] < 0)
            {
                number = matrix[i][j];
            }
        }
        console.log(number);
    }
}
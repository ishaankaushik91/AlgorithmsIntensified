let matrix = [
    [1, 1, -10, -9, -8, -7, 7, 8, 9],
    [10, 70, -70, -80, -9],
    [12, 21, -98, -78],
    [90, -7, -500, -2]
];
largetsNegativeDuplicate(0, matrix, 0, -100000000);

function largetsNegativeDuplicate(index, matrix, j, number)
{
    if (index < matrix.length)
    {
        if (j < matrix[index].length)
        {
            if (number < matrix[index][j] && matrix[index][j] < 0)
            {
                number = matrix[index][j];
                return largetsNegativeDuplicate(index, matrix, j + 1, number);
            }
            return largetsNegativeDuplicate(index, matrix, j + 1, number);
        }
        console.log(number);
        j = 0;
        number = -100000;
        return largetsNegativeDuplicate(index + 1, matrix, j, number);
    }
}
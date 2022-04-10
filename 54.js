let matrix = [
    [1, 2, 3, -2, 12],
    [21, 10, -110, -9],
    [-21, 21, -90, -89],
    [1, 1, 1, 1, 1]
];
frequency(0, matrix, 0, 0);

function frequency(index, matrix, j, count)
{
    if (index < matrix.length)
    {
        if (j < matrix[index].length)
        {
            if (matrix[index][j] < 0)
            {
                return frequency(index, matrix, j + 1, count + 1);
            }
            return frequency(index, matrix, j + 1, count);
        }
        console.log(count);
        j = 0;
        count = 0;
        return frequency(index + 1, matrix, j, count);
    }
}
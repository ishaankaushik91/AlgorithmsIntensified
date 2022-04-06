let matrix = [
    [1, 24, 2, 1, 1, 1, 1, 1, 1, 1],
    [22, 22, 22, 22]
];

insertion(0, matrix, 0, 0);

function insertion(index, matrix, j, freq)
{
    if (index < matrix.length)
    {
        if (j < matrix[index].length)
        {
            for (let k = 0; k < matrix[index].length; k++)
            {
                if (matrix[index][j] == matrix[index][k])
                {
                    freq++;
                }
            }
            console.log(freq, matrix[index][j]);
            freq = 0;
            return insertion(index, matrix, j + 1, freq);
        }
        return insertion(index + 1, matrix, j, freq);
    }
}
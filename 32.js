let matrix = [
    [0, 1, 1, 1],
    [0, 0, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0]
];

console.log(maxOne(0, maxOne, 0, 0, 0));

function maxOne(index, matrix, j, count, real)
{
    if (index < matrix.length)
    {
        if (j < matrix[index].length)
        {
            if (matrix[index][j] == 1)
            {
                maxOne(index, matrix, j + 1, count + 1, real);
            }
            return maxOne(index, matrix, j + 1, count, real);
        }
        if (real < count)
        {
            real = index;
            count = 0;
            return maxOne(index + 1, matrix, j, count, real);
        }
        count = 0;
        return maxOne(index + 1, matrix, j, count, real);
    }
    return real;
}
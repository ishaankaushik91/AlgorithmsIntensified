let matrix = [
    [12, 21, 11, 10, 30],
    [70, 80, 90, 45, 100],
    [98, 88, 78, 68, 58],
    [100, 98, 89, 67, 76]
];
console.log(Pattern(0, 0, matrix, 0));

function Pattern(index, j, matrix, count)
{
    if (index < matrix.length)
    {
        if (j < matrix[index].length)
        {
            if (matrix[index][j] - matrix[index][j + 1] == 10)
            {
                count++;
                return Pattern(index, j + 1, matrix, count);
            }
            return Pattern(index, j + 1, matrix, count);
        }
        if (count == 4)
        {
            return index;
        }
        j = 0;
        count = 0;
        return Pattern(index + 1, j, matrix, count);
    }
}
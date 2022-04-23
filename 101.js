let matrix = [
    [12, 21, 11, 10, 30],
    [70, 80, 90, 45, 100],
    [98, 88, 78, 68, 58],
    [100, 98, 89, 67, 76]
];
console.log(Pattern(matrix));

function Pattern(matrix)
{
    for (let i = 0; i < matrix.length; i++)
    {
        let count = 0;
        for (let j = 0; j < matrix[i].length; j++)
        {
            if (matrix[i][j] - matrix[i][j + 1] == 10)
            {
                count++;
            }
        }
        if (count == 4)
        {
            return i;
        }
    }
}
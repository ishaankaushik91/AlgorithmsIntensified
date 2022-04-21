let matrix = [
    [10, 21, 21, 12, 11],
    [90, 99, 89, 8, 10],
    [90, 10, 21, 22, 1]
];
Summation(0, matrix, 0, 0);

function Summation(index, matrix, j, sum)
{
    if (index < matrix.length)
    {
        if (j < matrix[index].length)
        {
            sum += matrix[index][j];
            return Summation(index, matrix, j + 1, sum);
        }
        console.log(sum);
        j = 0;
        sum = 0;
        return Summation(index + 1, matrix, j, sum);
    }
}
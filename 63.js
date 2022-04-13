let matrix = [
    [1, 2, 3, 4, 5, 12, 21, 1, 1, 1, 1, 21],
    [10, 11, 12, 13, 89, 88, 56, 49, 99],
    [190, 1911, 890, 188, 91, 92, 93, 94, 95],
    [16, 18, 19, 60, 91, 92, 93, 94, 95]
];
Summation(0, matrix, 0, Math.floor(Math.random() * (matrix[0].length - 1)), 0, 0);

function Summation(index, matrix, j, randomIndex, count, sum)
{
    if (index < matrix.length)
    {
        if (j < matrix[index].length)
        {
            if (j == randomIndex && count < 3)
            {
                sum += matrix[index][j];
                return Summation(index, matrix, j + 1, randomIndex, count + 1, sum);
            }
            return Summation(index, matrix, j + 1, randomIndex, count, sum);
        }
        console.log(sum);
        j = 0;
        count = 0;
        sum = 0;
        randomIndex = Math.floor(Math.random() * (matrix[index].length - 1));
        return Summation(index + 1, matrix, j, randomIndex, count, sum);
    }
}
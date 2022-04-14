let matrix = [
    [1, 2, 3, 4, 5, 12, 21, 1, 1, 1, 1, 21],
    [10, 11, 12, 13, 89, 88, 56, 49, 99],
    [190, 1911, 890, 188, 91, 92, 93, 94, 95],
    [16, 18, 19, 60, 91, 92, 93, 94, 95]
];
Summation(matrix, Math.floor(Math.random() * (matrix[0].length - 1)));

function Summation(matrix, randomIndex)
{
    for (let i = 0; i < matrix.length; i++)
    {
        let sum = 0;
        for (let j = 0; j < matrix[i].length; j++)
        {
            if (j == randomIndex)
            {
                sum += matrix[i][j];
            }
            randomIndex = Math.floor(Math.random() * (matrix[i].length - 1));
        }
        console.log(sum);
    }
}
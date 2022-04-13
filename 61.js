let matrix = [
    [1, -3, -8, 90],
    [-90, -7, -45, -80],
    [-9, -78, -9, -6, -4, -100]
];
console.log(Summation(matrix));

function Summation(matrix)
{
    let sum = 0;
    for (let i = 0; i < matrix.length; i++)
    {
        let number = -10000000;
        for (let j = 0; j < matrix[i].length; j++)
        {
            if (number < matrix[i][j] && matrix[i][j] < 0)
            {
                number = matrix[i][j];
                sum += number;
            }
        }
    }
    return sum;
}
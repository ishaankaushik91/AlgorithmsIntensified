let matrix = [
    [1, -3, -8, 90],
    [-90, -7, -45, -80],
    [-9, -78, -9, -6, -4, -100]
];
console.log(Summation(0, matrix, 0, -100000, 0));

function Summation(index, matrix, j, number, sum)
{
    if (index < matrix.length)
    {
        if(j < matrix[index].length)
        {
            if (number < matrix[index][j] && matrix[index][j] < 0)
            {
                number = matrix[index][j];
                sum = number + sum;
                return Summation(index, matrix, j + 1, number, sum);
            }
            return Summation(index, matrix, j + 1, number, sum);
        }
        j = 0;
        number = -1000000;
        return Summation(index + 1, matrix, j, number, sum);
    }
    return sum;
}
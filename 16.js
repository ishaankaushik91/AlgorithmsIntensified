let matrix = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
];

sine(matrix);

function sine(matrix)
{
    for (let column = 0; column < 3; column++)
    {
        for (let row = 0; row < 3; row++)
        {
            console.log(matrix[row][column]);
        }
    }
}
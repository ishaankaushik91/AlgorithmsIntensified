let matrix = [
    [0, 1, 1, 1],
    [0, 0, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0]
];

let real = 0;
for (let i = 0; i < matrix.length; i++)
{
    let count = 0;
    for (let j = 0; j < matrix[i].length; j++)
    {
        if (matrix[i][j] == 1)
        {
            count++;
        }
    }
    if (real < count)
    {
        real = i;
    }
}

console.log(real);
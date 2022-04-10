let matrix = [
    [1, 12, 12, 1, 1, 1, 1, 1, 12],
    [12, 201, 21001, 1212, 12, 12, 12],
    [2127812, 12, 271, 12, 12, 12, 12, 12, 289, 182, 1728],
    [10, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

let row = 0, numbers = 0;;

for (let i = 0;  i < matrix.length; i++)
{
    let count = 0;
    for (let j = 0; j < matrix[i].length; j++)
    {
        if (matrix[i][j] == 12)
        {
            count++;
        }
    }
    if (numbers < count)
    {
        numbers = count;
        row = i;
    }
}

console.log(row, numbers);
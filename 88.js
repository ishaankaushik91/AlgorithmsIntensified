let matrix = [
    [10, "Mango", 13, "Banana", 100],
    [90, 90, 87, "Apple", 21],
  ];
Separation(matrix);

function Separation(matrix)
{
    let tempArray = [];
    for (let i = 0; i < matrix.length; i++)
    {
        for (let j = 0; j < matrix[i].length; j++)
        {
            if (typeof(matrix[i][j]) == "string")
            {
                tempArray.push(matrix[i][j]);
                for (let k = j; k < matrix[i].length; k++)
                {
                    matrix[i][j] = matrix[i][j + 1];
                }
            }
        }
    }
    matrix.push(tempArray);
    console.log(matrix);
}
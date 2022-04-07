let array = [-1, 2, -1, 3, 2];

for (let i = 0; i < array.length; i++)
{
    let frequency = 0;
    for (let j = 0; j < array.length; j++)
    {
        if (array[i] == array[j])
        {
            frequency++;
        }
    }
    if (frequency == 1)
    {
        console.log(array[i]);
        break;
    }
}
let array = [1, 2, 3, 4, 4, 4, 5, 5, 5, 5, 5, 5, 8, 8, 9, 1, 2];
console.log(highestFrequency(array));

function highestFrequency(array)
{
    let freq = 0;
    for (let i = 0; i < array.length; i++)
    {
        let chicks = 0;
        for (let j = 0; j < array.length; j++)
        {
            if (array[i] == array[j])
            {
                chicks++;
            }
        }
        if (freq < chicks)
        {
            freq = i;
        }
    }
    return array[freq];
}
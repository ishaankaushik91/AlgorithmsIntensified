let array = [1, -2, -2, -3];
console.log(frequency(array));

function frequency(array)
{
    let count = 0;
    for (let i = 0; i < array.length; i++)
    {
        if (array[i] < 0)
        {
            count++;
        }
    }
    return count;
}
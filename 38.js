let array = [-1, 2, -1, 3, 2];
console.log(nonRepeating(0, array, 0, 0));

function nonRepeating(index, array, j, frequency)
{
    if (index < array.length)
    {
        if (j < array.length)
        {
            if (array[index] == array[j])
            {
                frequency++;
                return nonRepeating(index, array, j + 1, frequency);
            }
            return nonRepeating(index, array, j + 1, frequency);
        }
        if (frequency == 1)
        {
            return array[index];
        }
        j = 0;
        frequency = 0;
        return nonRepeating(index + 1, array, j, frequency);
    }
}
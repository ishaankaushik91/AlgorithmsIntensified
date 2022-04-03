function highestFrequency(index, array, j, freq, save)
{
    if (index < array.length)
    {
        if (j < array.length)
        {
            if (array[index] == array[j])
            {
                save++;
                return highestFrequency(index, array, j + 1, freq, save)
            }
            return highestFrequency(index, array, j + 1, freq, save);
        }
        if (freq < save)
        {
            freq = index;
        }
        j = 0;
        save = 0;
        return highestFrequency(index + 1, array, j, freq, save);
    }
    return array[freq];
}

let array = [1, 2, 3, 4, 4, 4, 5, 5, 5, 5, 5, 5, 8, 8, 9, 1, 2, 2, 2, 2, 2, 2, 2, 2];
console.log(highestFrequency(0, array,0, 0, 0));
let array = [1, 2, 3, 4, 2, 2, 3, 3, 3, 3, 3, 5, 6, 7];
console.log(majority(0, array, 0, 0, 0, 0));

function majority(index, array, j, frequency, newFreq, number)
{
    if (index < array.length)
    {
        if (j < array.length)
        {
            if (array[index] == array[j])
            {
                frequency++;
                return majority(index, array, j + 1, frequency, newFreq, number);
            }
            return majority(index, array, j + 1, frequency, newFreq, number);
        }
        if (newFreq < frequency)
        {
            newFreq = frequency;
            frequency = 0;
            j = 0;
            number = array[index];
            return majority(index + 1, array, j, frequency, newFreq, number);
        }
        frequency = 0;
        j = 0;
        return majority(index + 1, array, j, frequency, newFreq, number);
    }
    return number;
}
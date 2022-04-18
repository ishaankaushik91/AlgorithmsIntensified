let array = ["batman", "thor", "superman", "wonder woman", "superman"];
console.log(MostFrequent(0, array, 0, 0, 0, 0, 0));

function MostFrequent(index, array, count, re, tempCount, count, k)
{
    if (index < array.length)
    {
        if (re < array.length)
        {
            if (array[index] == array[re])
            {
                tempCount++;
                return MostFrequent(index, array, count, re + 1, tempCount, count, k);
            }
            return MostFrequent(index, array, count, re + 1, tempCount, count, k);
        }
        if (count < tempCount)
        {
            count = tempCount;
            tempCount = 0;
            re = 0;
            k = index;
            return MostFrequent(index + 1, array, count, re, tempCount, count, k);
        }
        tempCount = 0;
        re = 0;
        return MostFrequent(index + 1, array, count, re, tempCount, count, k);
    }
    return array[k];
}
let array = ["batman", "thor", "superman", "wonder woman", "superman"];
console.log(MostFrequent(0, array, 0, 0));

function MostFrequent(index, array, count, k)
{
    if (index < array.length)
    {
        let tempCount = 0;
        for (let j = 0; j < array.length; j++)
        {
            if (array[index] == array[j])
            {
                tempCount++;
            }
        }
        if (count < tempCount)
        {
            count = tempCount;
            k = index;
            return MostFrequent(index + 1, array, count, k);
        }
        return MostFrequent(index + 1, array, count, k);
    }
    return array[k];
}
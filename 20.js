let array = [2, 6, 1, 9, 4, 5, 3];
let sub = [2];
subSequence(1, array, sub);
console.log(sub);

function subSequence(index, array, sub)
{
    if (index < array.length)
    {
        for (let j = 0; j < array.length; j++)
        {
            if (array[index] == array[j] - 1 || array[index] == array[j] + 1)
            {
                sub.push(array[index]);
            }
        }
        return subSequence(index + 1, array, sub);
    }
}
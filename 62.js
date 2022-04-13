let array = [1, 2, 45, 67, 89, 90, 34, 78, 190, 188, 190];
console.log(Summation(0, array, Math.floor(Math.random() * (array.length - 1)), 0));

function Summation(index, array, randomIndex, count)
{
    if (index < array.length)
    {
        if (index == randomIndex && count < 3)
        {
            return array[index] + Summation(index + 1, array, randomIndex, count + 1);
        }
        randomIndex = Math.floor(Math.random() * (array.length - 1));
        return Summation(index + 1, array, randomIndex, count);
    }
    return 0;
}
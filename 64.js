let array = [1, 2, 45, 67, 89, 90, 34, 78, 190, 188, 190];
console.log(Summation(array, Math.floor(Math.random() * (array.length - 1))));

function Summation(array, randomIndex)
{
    let sum = 0;
    for (let i = 0; i < array.length; i++)
    {
        if (i == randomIndex)
        {
            sum += array[i];
        }
        randomIndex = Math.floor(Math.random() * (array.length - 1));
    }
    return sum;
}
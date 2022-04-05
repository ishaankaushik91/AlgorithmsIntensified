let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let randomIndex = Math.floor(Math.random() * (array.length - 1));

function deletion(index, array, position)
{
    if (index < array.length)
    {
        if (index == position)
        {
            for (let j = position; j < array.length; j++)
            {
                array[j] = array[j + 1];
            }
            console.log(array);
            return;
        }
        return deletion(index + 1, array, position);
    }
}

deletion(0, array, randomIndex);
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let randomIndex = Math.floor(Math.random() * (array.length - 1));

function deletion(index, array, position)
{
    if (index < array.length)
    {
        if (index == position)
        {
            array[index] = array[index + 1];
            return deletion(index + 1, array, position + 1);
        }
        return deletion(index + 1, array, position);
    }
    console.log(array);
}

deletion(0, array, randomIndex);
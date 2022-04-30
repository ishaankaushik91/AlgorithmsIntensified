let array = [10, 50, 21, 11, 80, 89, 890, 6152, 1];
bump(0, array);

function bump(index, array)
{
    if (index < array.length)
    {
        let str = "";
        for (let j = index; j >= 0; j--)
        {
            str += String(array[j]) + " ";
        }
        console.log(str);
        return bump(index + 1, array);
    }
}
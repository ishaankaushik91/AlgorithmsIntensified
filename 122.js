let array = [10, 50, 21, 11, 80, 89, 890, 6152, 1];
bump(0, array, 0, "");

function bump(index, array, j, str)
{
    if (index < array.length)
    {
        if (j >= 0)
        {
            str += String(array[j]) + " ";
            return bump(index, array, j - 1, str);
        }
        console.log(str);
        j = index;
        str = "";
        return bump(index + 1, array, j, str);
    }
}
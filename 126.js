let array = [90, 80, 10, 12, 13, 35];
jump(0, 0, array, "");

function jump(index, j, array, str)
{
    if (index < array.length)
    {
        if (j < array.length)
        {
            str += String(array[j]) + " ";
            return jump(index, j + 1, array, str);
        }
        console.log(str);
        j = index;
        str = "";
        return jump(index + 1, j, array, str);
    }
}
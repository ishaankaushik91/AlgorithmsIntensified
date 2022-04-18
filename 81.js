let array = ["0101", "2100", "22222", "0001", "000211", "0000122"];
way(0, array);

function way(index, array)
{
    if (index < array.length)
    {
        console.log(Number(array[index]));
        return way(index + 1, array);
    }
}
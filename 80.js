let array = ["0101", "2100", "22222", "0001", "000211", "0000122"];
way(array);

function way(array)
{
    for (let i = 0; i < array.length; i++)
    {
        console.log(Number(array[i]));
    }
}
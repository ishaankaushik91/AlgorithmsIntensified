let array = [10, 50, 21, 11, 80, 89, 890, 6152, 1];
bump(array);

function bump(array)
{
    for (let i = 0; i < array.length; i++)
    {
        let str = "";
        for (let j = i; j >= 0; j--)
        {
            str += array[j] + " ";
        }
        console.log(str);
    }
}
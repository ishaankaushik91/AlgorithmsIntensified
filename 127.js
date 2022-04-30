let array = [90, 80, 10, 12, 13, 35];
jump(array);

function jump(array)
{
    for (let i = 0; i < array.length; i++)
    {
        let str = "";
        for (let j = i; j < array.length; j++)
        {
            str += String(array[j]) + " ";
        }
        console.log(str);
    }
}
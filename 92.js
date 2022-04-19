let str = "Break your goal into smaller parts to actually achieve them";
Duplis(0, str);

function Duplis(index, str)
{
    if (index < str.length)
    {
        for (let j = index + 1; j < str.length; j++)
        {
            if (str[index] == " " && str[index] == str[j])
            {
                console.log(str[index]);
            }
        }
        return Duplis(index + 1, str);
    }
}
let str = "Break your goal into smaller parts to actually achieve them";
Duplis(str);

function Duplis(str)
{
    for (let i = 0; i < str.length; i++)
    {
        for (let j = i + 1; j < str.length; j++)
        {
            if (str[i] == " " && str[i] == str[j])
            {
                console.log(str[i]);
            }
        }
    }
}
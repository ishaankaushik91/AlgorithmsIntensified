let str = "My name is Ishaan";
Duplis(0, str);

function Duplis(index, str)
{
    if (index < str.length)
    {
        for (let j = index + 1; j < str.length; j++)
        {
            if (str[index] == str[j])
            {
                console.log(str[index]);
                break;
            }
        }
        return Duplis(index + 1, str);
    }
}
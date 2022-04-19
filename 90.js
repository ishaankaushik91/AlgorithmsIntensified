let str = "1289371291My name is Ishaan";
CheckOnlyNums(str);

function CheckOnlyNums(str)
{
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrst";
    for (let i = 0; i < alphabets.length; i++)
    {
        for (let j = 0; j < str.length; j++)
        {
            if (alphabets[i] = str[j])
            {
                console.log("There are alphabets too");
                return;
            }
        }
    }
}
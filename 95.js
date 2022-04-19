let str = "Goal before hole";
nonRepeating(str);

function nonRepeating(str)
{
    for (let i =0; i < str.length; i++)
    {
        let aaauuu = 0;
        for (let j = i + 1; j < str.length; j++)
        {
            if (str[i] == str[j])
            {
                aaauuu = 1;
                break;
            }
        }
        if (aaauuu == 0)
        {
            console.log(str[i]);
        }
    }
}
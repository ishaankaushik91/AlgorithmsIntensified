let str = "Goal before hole";
nonRepeating(0, str);

function nonRepeating(index, str)
{
    if (index < str.length)
    {
        let aaauuu = 0;
        for (let j = index + 1; j < str.length; j++)
        {
            if (str[index] == str[j])
            {
                aaauuu = 1;
                break;
            }
        }
        if (aaauuu == 0)
        {
            console.log(str[index]);
            return nonRepeating(index + 1, str);
        }
        return nonRepeating(index + 1, str);
    }
}
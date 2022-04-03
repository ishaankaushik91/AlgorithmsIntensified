function frequency(string)
{
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let freq = 0;

    for (let i = 0; i < string.length; i++)
    {
        for (let j = 0; j < chars.length; j++)
        {
            if (string[i] == chars[j])
            {
                freq++;
                break;
            }
        }
    }
    return freq;
}

let string = "8912329831982Namo";
console.log(frequency(string));
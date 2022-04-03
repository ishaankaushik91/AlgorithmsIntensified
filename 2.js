function frequency(index, string, chars, j, freq)
{
    if (index < string.length)
    {
        if (j < chars.length)
        {
            if (string[index] == chars[j])
            {
                freq++;
                return frequency(index, string, chars, j + 1, freq);
            }
            return frequency(index, string, chars, j + 1, freq);
        }
        j = 0;
        return frequency(index + 1, string, chars, j, freq);
    }
    return freq;
}

let string = "8936731298y2813Namo10";
let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
console.log(frequency(0, string, chars, 0, 0));
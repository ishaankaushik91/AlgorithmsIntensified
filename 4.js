function upper(index, string, chars, j)
{
    if (index < string.length)
    {
        if (j < chars.length)
        {
            if (string[index] == chars[j])
            {
                return string[index];
            }
            return upper(index, string, chars, j + 1);
        }
        j = 0;
        return upper(index + 1, string, chars, j);
    }
}

let string = "jasdbc ha188BHHjhhejbccwedfOOOO";
let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(upper(0, string, chars, 0));
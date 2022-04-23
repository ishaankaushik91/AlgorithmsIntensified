let string = "Her favourite flavour is green apple";
console.log(VowelSum(0, string));

function VowelSum(index, string)
{
    if (index < string.length)
    {
        if (string[index] == "a" || string[index] == "e" || string[index] == "i" || string[index] == "o" || string[index] == "u")
        {
            return string.charCodeAt(index) + VowelSum(index + 1, string);
        }
        return VowelSum(index + 1, string);
    }
    return 0;
}
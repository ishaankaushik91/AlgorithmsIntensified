let string = "Her favourite flavour is green apple";
console.log(VowelSum(string));

function VowelSum(string)
{
    let sum = 0;
    for (let i = 0; i < string.length; i++)
    {
        if (string[i] = "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u")
        {
            sum += string.charCodeAt(i);
        }
    }
    return sum;
}
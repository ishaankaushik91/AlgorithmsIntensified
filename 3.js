function upper(string)
{
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < string.length; i++)
    {
        for (let j = 0; j < chars.length; j++)
        {
            if (string[i] == chars[j])
            {
                return string[i];
            }
        }
    }
}

let string = "dduckdmsbikjdekw denbibdui Ahjb jweb jdbehuB";
console.log(upper(string));
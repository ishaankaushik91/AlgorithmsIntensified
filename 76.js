let sentence = "I'll Hack NASA soon";
Searching(sentence, "NASA");

function Searching(sentence, word)
{
    for (let i = 0; i < sentence.length; i++)
    {
        if (word == sentence[i] + sentence[i + 1] + sentence[i + 2] + sentence[i + 3])
        {
            console.log("Found", sentence[i] + sentence[i + 1] + sentence[i + 2] + sentence[i + 3]);
            return;
        }
    }
}
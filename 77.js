let sentence = "I'll Hack NASA soon";
console.log(Searching(0, sentence, "NASA"));

function Searching(index, sentence, word)
{
    if (index < sentence.length)
    {
        if (word == sentence[index] + sentence[index + 1] + sentence[index + 2] + sentence[index + 3])
        {
            return `Found ${word}`;
        }
        return Searching(index + 1, sentence, word);
    }
}
function oddFreqs(array)
{
    let next;
    for (let i = 0; i < array.length; i++)
    {
        let freq = 0;
        for (let j = 0; j < array.length; j++)
        {
            if (array[i] == array[j] && array[i] != next)
            {
                freq++;
            }
        }
        next = array[i];
        if (freq % 2 != 0)
        {
            console.log(array[i]);
        }
    }
}

let array = [82, 21, 21, 21, 21, 32, 1, 1000, 882, 882];
oddFreqs(array);
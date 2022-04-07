let array1 = [1, 5, 10, 20, 40, 80];
let array2 = [6, 7, 20, 80, 100];
let array3 = [3, 4, 15, 20, 30, 70, 80, 120];

for (let i = 0; i < array1.length; i++)
{
    let count = 1;
    let hoe = 0, boo = 0;

    for (let j = 0; j < array2.length; j++)
    {
        if (array1[i] == array2[j])
        {
            hoe = 1;
            break;
        }
    }

    for (let k = 0; k < array3.length; k++)
    {
        if (array1[i] == array3[k])
        {
            boo = 1;
            break;
        }
    }
    if (hoe && boo) console.log(array1[i]);
}
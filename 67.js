function generate(length)
{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let bro = "";
    for (let i = 0; i < length; i++)
    {
        let randomIndex = Math.floor(Math.random() * (str.length - 1));
        bro += str[randomIndex];
    }
    return bro;
}

console.log(generate(5));
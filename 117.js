function p(index, inner)
{
    if (index < 10)
    {
        let str = "";
        for (inner = 0; inner <= index; inner++)
        {
            str += "*";
        }
        console.log(str);
        return p(index + 1, inner);
    }
}
p(0, 0);
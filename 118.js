function p(index, inner, str)
{
    if (index < 10)
    {
        if (inner <= index)
        {
            str += "*";
            return p(index, inner + 1, str);
        }
        console.log(str);
        str = "";
        inner = 0;
        return p(index + 1, inner, str);
    }    
}
p(0, 0, "");
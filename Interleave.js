function interleave(string1 , string2)
{
    let newstring = '';
    for(let index = 0;index < string1.length;index++)
    {
        newstring += string1[index];
        if(index !== string1.length - 1)
            newstring += string2;
    }
    return newstring;
}

function main()
{
    let result = interleave('abc','-');
    console.log(result);
}

main();
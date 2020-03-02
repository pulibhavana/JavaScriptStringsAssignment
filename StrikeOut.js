function strikeout(string1,string2)
{
    return string1.split('').map(replaceall,string2[0]).join('')
}

function replaceall(element,index,str)
{
    return element == this ?'-':element;
}

function main()
{
    console.log(strikeout("hello world","l"))
}

main();
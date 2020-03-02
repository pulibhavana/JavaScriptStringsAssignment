function strikeout(string1,string2)
{
    return string1.split('').map(replaceall,string2[0]).join('')
}

function replaceall(element,index,str)
{
    var newstr = '';
    if(element == this)
        newstr += '-';
    else
        newstr += element;
    return newstr;

}

function main()
{
    console.log(strikeout("hello world","l"))
}

main();
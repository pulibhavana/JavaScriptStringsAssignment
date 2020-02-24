function main()
{
    string = " hello "
    result = removeSpaces(string)
    console.log(result)
}

function removeSpaces(string)
{
    len = string.length
    var frontspace = countFrontSpaces(string)
    var lastspace = countLastSpaces(string)
    newstring = ''
    for(var index = frontspace;index < len - lastspace;index++)
        newstring += string[index]
    return newstring
}

function countFrontSpaces(string)
{
    var frontspace = 0
    for(var start = 0;start < string.length - 1;start ++)
    {
        if(string[start] != ' ')
            break
        frontspace = frontspace + 1
    }
    return frontspace
}

function countLastSpaces(string)
{
    var lastspace = 0
    for(var end = string.length - 1;end > 0 ;end --)
    {
        if(string[end] != ' ')
            break
        lastspace = lastspace + 1
    }
    return lastspace
}


main()
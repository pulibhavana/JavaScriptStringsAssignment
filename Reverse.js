function main()
{
    string = 'helloworld'
    result = stringReversal(string)
    console.log(result)
}

function stringReversal(string)
{
    len = string.length
    reversedstring = ''
    for(var endindex = len - 1;endindex >= 0;endindex -- )
        reversedstring += string[endindex]
    return reversedstring
}

main()
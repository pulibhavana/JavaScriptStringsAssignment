
function reverseWords(string)
{
    var words = string.split(' ') , newstring = ''
    for(var item of words) {
        reversedword = stringReversal(item)
        newstring += reversedword+' '
    }
    return newstring

}

function main()
{
    result = reverseWords('hello world')
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
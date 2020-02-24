function reverseWordOrder(string)
{
    var words = string.split(' '), reversedstring = ''
    for(var index = words.length - 1;index >= 0;index--)
    {
        reversedstring += words[index]+" "
    }
    return reversedstring
}

function main()
{
    result = reverseWordOrder('how are you   dear')
    console.log(result)
}

main()
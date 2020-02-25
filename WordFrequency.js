function wordFrequency(string1, string2)
{
    var words = string1.split(' '), count = 0
    for(var index = 0;index < words.length;index++)
    {
        if(string2 == words[index])
            count = count + 1
    }
    return count
}

function main()
{
    result = wordFrequency("Hello world Hello","hello")
    console.log(result)
}

main()
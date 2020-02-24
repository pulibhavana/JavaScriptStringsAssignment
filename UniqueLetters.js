function main()
{
    string = "a,b,c"
    result = countUniqueLetters(string)
    console.log(result)
}

function countUniqueLetters(string)
{
    word = string.toLowerCase()
    var myset = new Set(word),count = 0
    for(var item of myset)
    {
        if (item.toLowerCase() != item.toUpperCase())
            count += 1

    }
    return count
}

main()
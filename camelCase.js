function main()
{
    result = camelCase(["hello","world"])
    console.log(result)
}

function camelCase(arguments)
{
    newstring = arguments[0].toLowerCase()
    for(var index = 1;index < arguments.length;index++) {
        string = arguments[index]
        word = string[0].toUpperCase()
        newword = word.concat(string.slice(1,string.length))
        newstring += newword
    }
    return newstring
}

main()
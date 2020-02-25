function strikeout(string1, string2)
{
    var newstring = '',words = string1.split(' '),character = string2[0]
    for(var index = 0;index < words.length;index++)
    {
        result = replace(words[index],character)
        newstring += result + ' '
    }
    return newstring
}

function replace(str, character)
{
    var newstring = ''
    for(var index = 0;index < str.length;index++) {
        if(str[index] == character)
            newstring += '-'
        else
            newstring += str[index]
    }
    return newstring
}

function main()
{
    result = strikeout("hello world",'l')
    console.log(result)
}

main()
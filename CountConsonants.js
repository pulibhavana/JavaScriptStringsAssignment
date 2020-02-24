function main()
{
    string = 'hello'
    result = countConsonants(string)
    console.log("The no of consonants present is:" + result)
}

function countConsonants(string)
{
    var consonantcount = 0
    for(var index =0;index < string.length;index++)
    {
        if(isConsonant(string[index]))
            consonantcount = consonantcount+1
    }
    return consonantcount
}

function isConsonant(character)
{
    vowels = ['a','e','i','o','u']
    char = character.toLowerCase()
    for(var index = 0;index < vowels.length;index++)
    {
        if(char == vowels[index])
            return false
    }
    return true
}

main()
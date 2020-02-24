function main()
{
    string = '123ab'
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
        if(char == vowels[index] || checkIfNumber(char))
            return false
    }
    return true
}

function checkIfNumber(char)
{
    var character = parseInt(char)
    return (!isNaN(character))
}

main()
function main()
{
    string = 'hello'
    result = countVowels(string)
    console.log("The no of vowels present is:" + result)
}

function countVowels(string)
{
    var vowelcount = 0
    for(var index =0;index < string.length;index++)
    {
        if(isVowel(string[index]))
            vowelcount = vowelcount+1
    }
    return vowelcount
}

function isVowel(character)
{
    vowels = ['a','e','i','o','u']
    char = character.toLowerCase()
    for(var index = 0;index < vowels.length;index++)
    {
        if(char == vowels[index])
            return true
    }
    return false
}

main()
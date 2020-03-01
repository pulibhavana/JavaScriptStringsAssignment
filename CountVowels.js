function main()
{
    console.log("The no of vowels present is:" + countVowels('helloo'));
}

function countVowels(string)
{
    let characters = string.split('');
    return characters.filter(isVowel).length;

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

main();
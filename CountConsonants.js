function main()
{
    console.log("The no of consonants present is:" + countConsonants('123abc'));
}

function countConsonants(string)
{
    characters = string.split('');
    return (characters.filter(isConsonant)).length;
}

function isConsonant(character)
{
    var vowels = ['a','e','i','o','u'];
    var char = character.toLowerCase()
    for(var index = 0;index < vowels.length;index++)
    {
        if(char === vowels[index] || checkIfChar(char))
            return false
    }
    return true
}

function checkIfChar(char)
{
    return char.toLowerCase() == char.toUpperCase();
}

main();
//exports = {countConsonants}
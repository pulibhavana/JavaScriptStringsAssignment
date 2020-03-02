function main()
{
    console.log("The no of consonants present is:" + countConsonants('123ABc'));
}

function countConsonants(string)
{
    characters = string.toLowerCase().split('');
    return (characters.filter(isConsonant)).length;
}

function isConsonant(character)
{
    var vowels = 'aeiou'
    return (checkIfChar(character) && !(vowels.includes(character)));
}

function checkIfChar(char)
{
    return char.toLowerCase() != char.toUpperCase();
}

main();

function main()
{
    console.log("The no of consonants present is:" + countConsonants('123ABc'));
}

function countConsonants(string)
{
    return (string.toLowerCase().split('').filter(isConsonant)).length;
}

function isConsonant(character)
{
    return (checkIfChar(character) && !('aeiou'.includes(character)));
}

function checkIfChar(char)
{
    return char.toLowerCase() != char.toUpperCase();
}

main();

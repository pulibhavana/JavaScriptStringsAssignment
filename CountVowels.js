function main()
{
    console.log("The no of vowels present is:" + countVowels('helloo'));
}

function countVowels(string)
{
    return string.split('').filter(isVowel).length;
}

function isVowel(character)
{
    return 'aeiou'.includes(character);
}

main();
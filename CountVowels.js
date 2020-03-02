function main()
{
    console.log("The no of vowels present is:" + countVowels('helloo'));
}

function countVowels(string)
{
    var characters = string.split('');
    return characters.filter(isVowel).length;

}

function isVowel(character)
{
    var vowels = 'aeiou'
    return vowels.includes(character);
}

main();
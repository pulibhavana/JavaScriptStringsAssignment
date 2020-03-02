function main()
{
    console.log(camelCase("hello world"));
}

function getTitleCase(word)
{
    return word[0].toUpperCase()+word.slice(1).toLowerCase();
}

function camelCase(string)
{
    words = string.split(" ");
    return words.slice(1).reduce(getCamelCase,words[0].toLowerCase());
}

function getCamelCase(accumulator,currentValue)
{
    return accumulator.concat(getTitleCase(currentValue))
}

main();
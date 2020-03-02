function wordFrequency(element)
{
    return element == this;
}

function main()
{
    result = ["hello","world","hello"].filter(wordFrequency, "hello")
    console.log(result.length)
}

main();
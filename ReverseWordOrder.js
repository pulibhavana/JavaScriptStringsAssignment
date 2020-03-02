function reverseWordOrder(string)
{
    return string.split(' ').reduceRight(reverse);
}

function reverse(accumulator,currentValue)
{
    return accumulator +" " + currentValue;
}

function main()
{
    console.log(reverseWordOrder('  how are you  dear  '))
}

main();
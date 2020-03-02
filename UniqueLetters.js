function main()
{
    console.log(['a','b','c','c'].filter(isUniqueLetter).length);
}

function isUniqueLetter(element,index,arr)
{
    return !(arr.slice(index+1).includes(element));
}

main();
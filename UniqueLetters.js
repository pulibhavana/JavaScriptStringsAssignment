function main()
{
    console.log(['a','b','c','c'].filter(countUniqueLetters).length);
}

function countUniqueLetters(element,index,arr)
{
    return !(arr.slice(index+1).includes(element));
}

main();
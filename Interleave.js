function interleave(str1,str2)
{
    return str1.split('').join(str2);
}

function main()
{
    console.log(interleave('abc','-'));
}
main();
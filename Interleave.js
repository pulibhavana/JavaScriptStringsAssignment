function interleave(element)
{
    let accumulator = '';
    return accumulator += element.concat(this);
}

function main()
{
    var str1 = 'abc',str2='-'
    characters = convertTolist(str1);
    result = characters.map(interleave,str2);
    console.log(convertToStr(result))
}

function convertTolist(str)
{
    return str.split('');
}

function convertToStr(str)
{
    return result.join('');
}

main();
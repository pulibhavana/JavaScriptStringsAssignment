function getreverse(accumulator,currentvalue,index,array)
{

    return accumulator.concat(currentvalue);
}

function reverse(str)
{
    var characters = str.split("");
    const result = characters.reduceRight(getreverse);
    return result;
}
console.log(reverse('abc'));

module.exports = {reverse};
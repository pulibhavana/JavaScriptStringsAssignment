const functions = require('./Reverse.js')
function getReverseWords(string)
{
    var words = string.split(' ');
    return words.reduce(reverseWord);
}

function reverseWord(accumulator,currentvalue)
{
    return functions.reverse(accumulator) +" "+ functions.reverse(currentvalue);
}

function main()
{
    console.log(getReverseWords('hello world hello'));
}

main();
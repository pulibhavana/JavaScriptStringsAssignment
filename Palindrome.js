let functions = require('./Reverse.js')
function main()
{
    console.log(isPalindrome('abba'));
}

function isPalindrome(string)
{
    return string == functions.reverse(string)
}

main();
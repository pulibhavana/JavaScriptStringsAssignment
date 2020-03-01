let functions = require('./Reverse.js')
function main()
{
    string = 'abba'
    result = isPalindrome(string)
    console.log(result)
}

function isPalindrome(string)
{
    return string == functions.reverse(string)
}

main();
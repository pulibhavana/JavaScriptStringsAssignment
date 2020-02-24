function main()
{
    string = 'abba'
    result = isPalindrome(string)
    console.log(result)
}

function isPalindrome(string)
{
    len =string.length
    mid = parseInt(len / 2)
    for(var start = 0, end = len-1;start <= mid , end >= mid;start ++, end --) {
        if (string[start] != string[end])
            return false
    }
    return true
}

main()
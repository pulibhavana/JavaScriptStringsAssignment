function main()
{
    console.log(removeSpaces('   hello    '))
}

function removeSpaces(string)
{
   var frontspaces = string.split('').findIndex(isalphabet),newstr = '';
   var lastspaces = string.split('').reverse().findIndex(isalphabet);
   return string.slice(frontspaces,string.length - lastspaces);
}

function isalphabet(element,index)
{
    return element != ' ';
}

main()
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
// P:string with capitals
// R: string with words split at the cases
// E: ^^
// P: remove any extra spacing, split at the capitials, map the elements back into the array and then join them with a space. This trim in the begining will remove any cases where there is a space in the front and the back or multiple spaces in random spots.

// complete the function
function solution(string) {
    console.log(string.trim().split(/(?=[A-Z])/).map(element => element.trim()).join(' '))
}
solution('camelCasing')
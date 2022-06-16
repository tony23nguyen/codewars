// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
//P: input is a string, ignore anything not a letter
//R: return a string with the letters replaced with their postion
//E: alphabetPosition("The sunset sets at twelve o' clock.")
//P: Loop(for each), change letter to corresponding alphabet position, return string

// function alphabetPosition(text){
//     let words = text.split('')
//     words = words.map(x => x.toUpperCase())
//     let position = []
//     let convertedPosition = []
//     words.forEach(element => { (position.push(element.charCodeAt(0)))
        
//     }); 

//     position = position.map(Number)
//     position.forEach(element => { convertedPosition.push(element -64
        
//     )});

//     if(convertedPosition > 0){
//         console.log(convertedPosition )
//     }
// }


function alphabetPosition(text){
    let words = text.split('')
    words = words.map(x => x.toUpperCase().charCodeAt(0) - 64).filter(function(x){return x > 0 & x < 27 }).join(' ')
    // words = words.filter(function(x){return x > 0 & x < 27 })
    // words = words.join(' ')

console.log(words)
return words
}

alphabetPosition("The sunset sets at twelve o' clock. z")
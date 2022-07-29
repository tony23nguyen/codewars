// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// function generateHashtag (str) {
//   let words = str.split(' ')
//   words = words.filter(e=> e != ' ' )
//   let count = str.split('')
//   count = count.filter(e=> e != ' ' )
//   console.log(words)

// if(count.length <= 140 & count.length > 0){
//   for(i=0;i<words.length;i++){
//     words[i]= words[i][0].toUpperCase()+words[i].substr(1);
//   }
//   let hash = words.join('')
//   console.log(`#${hash}`)
//   console.log(count)
//   return `#${hash}`
//   } else 
//   console.log(count)
//   return false

// }generateHashtag("code" + " ".repeat(140) + "wars")
 
function generateHashtag (str) {
    return str.length > 140 || str === '' ? false :
      '#' + str.split(' ').map(capitalize).join('');
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
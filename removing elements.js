// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
    let newArr = arr.filter((e,i) => i%2 == 0)
    console.log(newArr)
    return newArr
  } removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])
  //removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

//   Testing for 
//   ["j","v","5","k","0","w","m","y","w","l","r","y","z","b","q","o","5","k","g","4","0","w","a","d","a","r","1"]: 
  
  
//   expected 
//   [ 'j' , '5', '0', 'm', 'r', 'z', 'q', '5', 'g', '0', 'a', 'a', 'r', '1' ] 
  
//   to deeply equal 
//   [ 'j', '5', '0', 'm', 'w', 'r', 'z', 'q', '5', 'g', '0', 'a', 'a', '1' ]
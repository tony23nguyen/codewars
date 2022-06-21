// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    let sum = array.reduce((count, current, ) => count + current, 0)
    if (array.length == 0){
          console.log(0)
          return 0
    } else
          console.log(sum/array.length)
          return sum/array.length
  
  
  }
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.



//my solution
function findUniq(arr) {
    arr = arr.sort()
    let unique
    for (i=0;i<arr.length;i++){
        if(arr[i] !==arr[i+1] & arr[i]!== arr[i-1] & arr!==unique ){
            unique = arr[i]
            
        }

    }console.log(unique)
    return unique
  }
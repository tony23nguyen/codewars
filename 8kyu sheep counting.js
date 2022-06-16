// // Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// P: an array of true or false
// R: return a number
// E:// [true,  true,  true,  false,
// //   true,  true,  true,  true ,
// //   true,  false, true,  false,
// //   true,  false, false, true ,
// //   true,  true,  true,  true ,
// //   false, false, true,  true]
// // The correct answer would be 17.
// P: loop, keep a counter return

function countSheeps(arrayOfSheep) {
    let count = 0
    for( i = 0; i<arrayOfSheep.length;i++){
        if(arrayOfSheep[i]==true){
            count += 1
        }
    } return count
}

// can be simplified by using the filter.boolean
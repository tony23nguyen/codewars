// P: non-negative integer
// R: return in descending order
// E: Input: 42145 Output: 54421
// P: string-split-sort array

function descendingOrder(n){
    let arr =  []
    arr = Number(n.toString().split('').sort(function(a,b){return b-a}).join(''))
    console.log(arr)
    return arr
    
  } descendingOrder(1122345)

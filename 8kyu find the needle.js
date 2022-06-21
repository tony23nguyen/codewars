// P: array where one value will be 'needle'
// R: return ' found the needle at position '
// E: 
// P: as long as it exists it should return where the needle is

function findNeedle(haystack) {
    let indexOfNeedle = haystack.indexOf('needle')
    
    if(indexOfNeedle !== -1){
      console.log(`found the needle at position ${indexOfNeedle} `)
      
    }
    }
    findNeedle(['apple','needle','ray'])
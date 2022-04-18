let conversion = {'M': 1000, "D": 500, "C":100, "L": 50, "X":10, "V":5, "I":1}
function romanNumeral(string) {
  let total=0
    for(let i=0; i <string.length; ++i){
        element = string[i]
        next = string[i+1]
        if(conversion[element] < conversion[next]){
            total= total - conversion[element]
        }else{
            total+= conversion[element]
        }
    }
    return total
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution

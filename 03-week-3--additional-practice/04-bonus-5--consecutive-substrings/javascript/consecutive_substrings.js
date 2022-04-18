function consecutiveSubstrings(string) {
  let subStrings = []
  console.log(string)
   

    for(let i=0; i<string.length; ++i){
        subStrings.push(string[i])
        let parentString = string[i]
        
        for(let j=i+1; j<string.length; ++j){
            parentString += string[j]
            subStrings.push(parentString)
        }
    }
    return subStrings
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution

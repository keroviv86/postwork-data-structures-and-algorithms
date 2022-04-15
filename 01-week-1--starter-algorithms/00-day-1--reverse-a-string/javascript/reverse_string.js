// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

function reverseString(str) {
  let newstr= ""
  for(let i=str.length-1; i>-1; --i){
    newstr=newstr+str[i]
  }
  return newstr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

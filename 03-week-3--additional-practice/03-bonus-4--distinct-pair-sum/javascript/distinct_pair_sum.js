function distinctPairSum(arr, k) {
  // type your code here
    let output =[]
    let outputNum =[]
    for(let i=0; i<arr.length; ++i){
        if(outputNum.indexOf(arr[i]) ===-1 && arr[i]+arr[i+1]===k){
            output.push([arr[i], arr[i+1]])
            outputNum.push(arr[i], arr[i+1])
        }
    }
    return output
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution

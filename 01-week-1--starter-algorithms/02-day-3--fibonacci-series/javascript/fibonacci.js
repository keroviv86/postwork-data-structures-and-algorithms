function fibonacci(num) {
  // if(num<2){
  //   return num
  // }else{
  //   return fibonacci(num-1)+fibonacci(num-2)
  // }
  // let arr=[]
  // for(let i=0;i<=num;++i){
  //   if(i<2){
  //     arr.push(i)
  //   }else{
  //     arr.push(arr[i-2]+arr[i-1])
  //   }
  // }
  // return arr[arr.length-1]
  if (num < 2) return num

  prev = 0
  fib = 1

  for (let i = 2; i <= num; ++i) {
      next_fib = prev + fib
      prev = fib
      fib = next_fib
  }
  
  return fib

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

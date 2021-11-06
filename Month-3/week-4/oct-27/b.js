function RBS(arr, high){
    // base case
    if(high== 0){
        return
    }

    // logic
    for(let i = 0; i <= high; i++){ // code for bubbling out the maximum value to "high" position
        if(arr[i]>arr[i+1]){
         [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
        //  
        }
    }
    RBS(arr, high-1);

    // console.log(arr)
     // recursive call

}
function runProgram(input) {
    // Write code here
   var input = input.split("\n");
   let N = +input[0];
   let arr1 = input[1].trim().split(" ").map(Number);
   let arr2 = input[2].trim().split(" ").map(Number);
   let arrCombine = [...arr1,...arr2];
//    console.log(arrCombine);
   RBS(arrCombine, arrCombine.length); // initial function call
   console.log(arrCombine.join(" "));
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`4
    1 5 7 9
    2 4 6 8`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  
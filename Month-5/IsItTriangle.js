function tri(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum = arr[0] +arr[1];
        
    }
    // console.log(sum)
    if( sum > arr[2]){
        console.log("Yes");
    }else{
        console.log("No");
    }
   
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testcases = +input[0];
    var line = 1;
    for(var i = 0; i < testcases; i++){
        var arr1 = input[line++].trim().split(" ").map(Number);
        var arr = arr1.sort((a,b)=>{
            return a-b;
        })
        tri(arr);
        // console.log(arr);
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5
    4 5 13
    7 1 8
    2 5 4
    2 2 2
    85 37 18
    `);
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
  
  
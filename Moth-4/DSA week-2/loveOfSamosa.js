function samosa(arr,N,R){
    var sum = 0;
    for(var i = 0; i < N; i++){
        sum+=arr[i];
        if(sum > R){
            return i;
        }
    }
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var [N,R] = input[0].trim().split(" ").map(Number);
    var arr1 = input[1].trim().split(" ").map(Number);
    var arr = arr1.sort((a,b)=>{
        return a-b;
    })
    console.log(samosa(arr,N,R))
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`4 10
    5 4 2 4`);
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
  
  
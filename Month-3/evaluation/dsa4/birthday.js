function gas(arr,newStr,current,M){
    if(newStr.length == M){
        console.log(newStr.join(" "));
    }
    if(current == arr.length){
        return;
    }
    for(var i = current; i < arr.length; i++){
        newStr.push(arr[i]);
        gas(arr,newStr,i+1,M);
        newStr.pop();
    }
}
function runProgram(input) {
    // Write code here
    var [N, M] = input.split(" ").map(Number);
    // console.log(N,M);
    var arr = [];
    var newStr = [];
    var current = 0;
    for(var i = 1; i <= N; i++){
        arr.push(i)   
    }
   gas(arr,newStr,current,M)
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`4 2`);
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
  
  
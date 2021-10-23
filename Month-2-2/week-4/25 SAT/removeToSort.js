function remove(arr,N){
    var arr1 = [];
    var previous = -100;
    for(var i = 0; i < N; i++){ 
      if(arr[i] >= previous){
        arr1.push(arr[i]);
        previous = arr[i];  
      }
    } 
    return arr1;
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var res = remove(arr,N);
    console.log(res.join(" "));

  }
  if (process.env.USERNAME === "admin") {
    runProgram(`11
    1 2 4 3 6 5 21 43 21 36 41`);
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
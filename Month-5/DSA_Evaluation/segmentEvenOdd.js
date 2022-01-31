function segment(arr,q,N){
    var odd = "";
    var even = ""
    for(var i = 0; i < N; i++){
        if(arr[i]%2 == 0){
            even+= arr[i] + " ";
        }else{
            odd+= arr[i]+ " "
        }
    }
    if(q == 1){
        console.log(even + odd)
    }else{
        console.log(odd + even);
    }
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCase = +input[0]
    var line = 1;
    for(var i = 0; i < testCase; i++){
        var N = +input[line++].trim();
        var arr = input[line++].trim().split(" ").map(Number);
        var q = +input[line++].trim();
        segment(arr,q,N)
    }
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    5
    1 2 3 4 5
    1
    5
    1 2 3 4 5
    2`);
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
  
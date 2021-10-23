//Enter code here
function differenceOfK(arr, K){
    var first = 0;
    var second = 0;
    while(first < arr.length && second < arr.length){
        var temp = arr[second] - arr[first];
        if(temp == K && first != second) {
            return "Yes"
        }else if(temp < K){
            second++;
        }else{
            first++;
        }
    }
    return "No";
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCases = +input[0];
    var line = 1;
    for(var i = 0; i < testCases;i++){
        var [N , K] = input[line++].trim().split(" ").map(Number);
        var arr = input[line++].trim().split(" ").map(Number);
        console.log(differenceOfK(arr, K));
    }
   

  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    5 3
    1 2 3 4 5
    5 8
    1 2 3 4 5`);
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
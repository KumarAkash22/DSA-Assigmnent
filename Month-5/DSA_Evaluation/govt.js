function govt(N,M,K,arr1,arr2){
    var count = 0;
    for(var i = 0; i < N; i++){
        var sub = arr1[i] - K;
        var add = arr1[i] - K;
        for(var i = 0; i < M; i++){
            if(arr2[i] <= sub || arr2[i] >= add){
                pop(arr2[i])
                count++;
            }
        }
    }
    return count;
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var [N,M,K] = input[0].trim().split(" ").map(Number);
    var arr1 = input[1].trim().split(" ").map(Number);
    var arr2 = input[2].trim().split(" ").map(Number);
    console.log(govt(N,M,K,arr1,arr2))
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`4 3 5
    60 45 80 60
    30 60 75`);
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
  
  
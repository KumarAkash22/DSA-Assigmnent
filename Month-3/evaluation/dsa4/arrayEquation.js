function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var count1 = 0
    var count2 = 0;
    var sum1 = 0;
    var sum2 = 0;
    for(var i = 0; i < N; i++){
        if(arr[i]%2==0){
            count1++;
            sum1+=arr[i];
        }else{
            count2++;
            sum2+=arr[i];
        }
    }
    console.log(sum1*count1 + sum2*count2);
      }
  if (process.env.USERNAME === "admin") {
    runProgram(`5
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
  
  
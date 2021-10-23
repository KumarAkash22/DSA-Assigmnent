function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var size = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var count = 0;
    var count1 = 0
    var res = arr[Math.floor(size/2)];
    for(var i = 0; i < res; i++){
        if(arr[i] <= res){
            count++;
        }
    }
   // console.log(count);
    for(var j = count; j < size; j++){
        if(arr[j] >= res){
            count1++;
        }
    }
   // console.log(count1);
    var sr = count1+count;
    if(sr == size){
        console.log(res);
    }else{
        console.log("-1")
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5
    4 3 6 7 8`);
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
  
  
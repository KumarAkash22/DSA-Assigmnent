function runProgram(input) {
    // Write code here
    input = input.split("\n");
    var size = +input[0];
    var arr = input[1].trim().split(" ")
    var newArr = [];
    count = 1;
    for(var  i = 0; i < size; i++){
      for(var j = i+1; j < size; j++){
        if(arr[i]==arr[j]){
          count++;
          newArr.push(arr[i]);
        }
      }
    }
    if(newArr[0]==undefined){
      console.log(arr[0])
    }else{
   console.log(newArr[0]);
    }
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1
    7`);
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
  
  
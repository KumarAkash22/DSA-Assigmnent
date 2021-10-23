function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var size = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    for(var i = 0; i < size-1; i++){
        var min = i;
        for(var j = i+1; j < size; j++){
            if(arr[min] > arr[j]){
                min = j;
            }
            
        }
        console.log(arr[min],arr[i]);
        [arr[min],arr[i]] = [arr[i],arr[min]];
    
    }
    console.log(arr)
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5
    3 5 0 9 8`);
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
  
  

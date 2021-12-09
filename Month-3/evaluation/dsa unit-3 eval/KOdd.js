function gs(arr,K,newStr,current,count1){
    if(newStr.length>0){
        var count = 0;
        for(var j = 0; j < newStr.length; j++){
            if(newStr[j]%2==1){
               count ++;
            }
        }  
        if(count >= K){
          count1[0]++;
          // console.log(newStr)
      }
    }
    
    if(current == arr.length){
        return;
    }
    for(var i = current; i < arr.length; i++){
        newStr.push(arr[i]);
        gs(arr,K, newStr,i+1,count1);
        newStr.pop();
    }
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testcases = +input[0];
    var line = 1;
    for(var i = 0; i < testcases;i++){
        var [N,K] = input[line++].trim().split(" ").map(Number);
        var arr = input[line++].trim().split(" ").map(Number);
        var newStr = [];
        var current = 0;
        count1 = [0]
        gs(arr,K,newStr,current,count1)
        console.log(count1[0]);
    }
    
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    4 2
    4 3 2 1
    2 1
    2 3`);
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
  
  
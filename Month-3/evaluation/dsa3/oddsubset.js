function gs(arr,newStr,current,count){
    // console.log(arr)
    debugger;
    if(newStr.length > 0){
        var sum = 0;
        
        var m = (newStr);
        for(var i = 0; i < m.length; i++){
            sum+=m[i]
        }
        
        if(sum%2==1){
            count++;
        }
        console.log(m,sum,count)
    }
    // console.log(count)
    if(current == arr.length){
        return;
    }
    for(var i = current; i < arr.length; i++){
        newStr.push(arr[i]);
        // console.log(newStr)
        gs(arr,newStr,i+1,count);
        newStr.pop();
    }
}
gs([1,2,3],[],0,0);
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var current = 0;
    var newStr = [] 
    var count = 0;
    gs(arr,newStr,current,count);
    // console.log(newStr)
    
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3
    1 2 3`);
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
  
  
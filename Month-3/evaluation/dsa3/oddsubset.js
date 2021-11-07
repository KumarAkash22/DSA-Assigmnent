function gs(arr,newStr,current){
    
    if(newStr.length > 0){
      var m = (newStr);
      // console.log(m)
        var sum = 0;
        for(var i = 0; i < m.length; i++){
            sum+=m[i]
        }
        // console.log(sum)
        if(sum%2!=0){
            count++;
        }
    }

    if(current == arr.length){
        return;
    }
    for(var i = current; i < arr.length; i++){
        newStr.push(arr[i]);
        gs(arr,newStr,i+1);
        newStr.pop();
    }
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var current = 0;
    newStr = [];
    count = 0;
    gs(arr,newStr,current);
    console.log(count)
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3
    -8 -4 1`);
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
  
  
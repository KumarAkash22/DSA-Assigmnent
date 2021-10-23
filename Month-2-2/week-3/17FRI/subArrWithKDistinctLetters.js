function distinct(N,K,str){
    var count = 0;
    var arr = [];
    for(var i = 0; i < K; i++){
        arr.push(str[i])
    }
    if(check(arr)){
        count++;
    }
    
    for(var j = K; j < N; j++){
        arr.shift();
        arr.push(str[i]);
        
    }
    return count;
}
function check(arr){
    var obj = {};
    for(var i = 0; i < arr.length; i++){
        if(obj[arr[i]] == undefined){
            obj[arr[i]] = 1;
        }else{
            return false;
        }
    }
    return true;
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var [N,K] = input[0].split(" ").map(Number);
    var str = input[1].trim();
    console.log(distinct(N,K,str));
     
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`4 2
    abcc`);
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
  
  
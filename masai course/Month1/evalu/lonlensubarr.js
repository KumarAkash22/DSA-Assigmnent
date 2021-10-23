function runProgram(input) {
    // Write code here
    input = input.split("\n");
    var testCases = +input[0];
    var line = 1;
    for(var l = 0; l < testCases; l++){
        var size = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number); 
      // console.log(size, arr)
    
    
   res = "";
   count = 1;
   max = 0;
   for(var i = 0; i < size; i++ ){
       for(var j = i; j< size; j++){
        res+=arr[j];
        res[res.length]=-1;
        for(var k = 0; k <res.length; k++){
            if(res[k]<res[k+1]){
               count++;
       } 
      }if(count> max){
        max= count;
      } 
       count = 0;
       
    } console.log(res)
    res = ""; 
    
}
//console.log(max);
    
}   
}
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    2
    1 1
    6
    1 2 1 2 3 1
    `);
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
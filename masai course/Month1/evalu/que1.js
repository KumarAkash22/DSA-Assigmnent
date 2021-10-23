function runProgram(input) {
   input = input.split("\n");
   var size = +input[0].trim();
   var arr = input[1].trim().split("").map(Number);
   //console.log(size, arr);
   res = "";
   count = 0;
   max = 0;
   for(var i = 0; i < size; i++ ){
       for(var j = i; j< size; j++){
        res+=arr[j];
        for(var k = 0; k <res.length; k++){
          if(res[k]==1){
            count++;
          }else if (res[k]==0){
            break;
          }
        }
        if(count> max){
          max= count;
        }
        
        count = 0;
       }
        res = ""; 
   }
   console.log(max);
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`7
    100110`);
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
  
  
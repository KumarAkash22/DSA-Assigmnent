function check(obj){
    for(key in obj){
    
        if(obj[key] > 1){
            return false;
        }
     //    console.log(count,obj[key])
    }
    return true;
}
function runProgram(input) {
    // Write code here
   var input = input.split("");
   var obj = {};
   var count = 0;
   for(var i = 0; i < input.length; i++){
       if(obj[input[i]] === undefined){
           obj[input[i]] = 1;
       }else{
           obj[input[i]]++
       }
   }
   var res = check(obj)
   
   
   if(res == true){
       console.log("Unique")
   }else{
       console.log("No")
   }
//    console.log(obj)
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`masji`);
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
  
  
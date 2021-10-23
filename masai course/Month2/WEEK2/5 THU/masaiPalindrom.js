
function palindrom(output){
    var reversestr ="";
for(var k = output.length-1; k>=0; k--){
  reversestr+=output[k] + "";
}
  return reversestr;
}
    // Write code here
    
    function runProgram(input){
      var a = input;
        var output = "";
      var maxLength = 0;
    for(var i = 0; i < a.length; i++){
      for(var j = i; j < a.length; j++){
        output+=a[j] + "";
        var items = palindrom(output);
        var result = "";
        if(items == output){
          result+=output.length + "";
            if(maxLength < output.length){
              maxLength = output.length;
            }        
        }
      }         
      output = "";
    }
    console.log(maxLength);
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`thisracecarisgood`);
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
  
  
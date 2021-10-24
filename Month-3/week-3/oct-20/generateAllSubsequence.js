function generateSubsequence(str,newStr,current){
    // console.log(str)
    if(newStr.length > 0){
        console.log(newStr);
    }
    if(current == str.length){
        // console.log(str)
        return;
    }
    
    for(var i = current; i < str.length; i++){
        // console.log(str)
        newStr+= str[i];
        generateSubsequence(str,newStr,i+1);
        newStr.pop();
    
    }
}
function runProgram(input) {
    // Write code here
   var input = input.split("\n");
   var N = +input[0];
   var str = input[1].trim();
   var current = 0;
//    str.push(str)
//    console.log(current.length)

   generateSubsequence(str,[],current);
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`4
    abcd`);
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
  

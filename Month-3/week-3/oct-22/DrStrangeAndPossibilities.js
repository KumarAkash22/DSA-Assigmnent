function generateSubsequence(str,newStr,current){
    // console.log(str)
    if(newStr.length > -1){
        console.log(newStr.join(" "));
    }
    if(current == str.length){
        // console.log(str)
        return;
    }
    
    for(var i = current; i < str.length; i++){
        // console.log(str)
        newStr.push(str[i]);
        generateSubsequence(str,newStr,i+1);
        newStr.pop();
    
    }
}
function runProgram(input) {
    // Write code here
    var input = +input;
    var str =[];
    var current = 0;
    for(var i = 1; i <= input;i++){
        str.push(i);
    }
    generateSubsequence(str,[],current);
  
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3`);
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
  
  
// //Enter code here
function generateSubsequence(str,newStr,current,obj){
    // console.log(str)
    if(newStr.length > -1){
      
    
      if(newStr.join("") in obj){

        obj[newStr.join("")]++;
        console.log("ggg")
      }else{
        obj[newStr.join("")] = 1;
        console.log(newStr.join(" "))
      }
    
    // console.log (obj)
        // console.log(newStr);
        
    }
    if(current == str.length){
        // console.log(str)
        return;
    }
    
    for(var i = current; i < str.length; i++){
        // console.log(str)
        newStr.push(str[i]);
        var obj = {};
        generateSubsequence(str,newStr,++current,obj);
        newStr.pop();
    
    }
}

function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var N = +input[0];
    var str = input[1].trim().split(" ").map(Number);
    str.sort((a,b) => a-b);
    console.log(str)
    var current = 0;
    
    generateSubsequence(str,[],current,{});
    
    
  // console.log(obj)
    
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3
    1 2 2`);
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
  
  
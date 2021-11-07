// //Enter code here
// function generateSubsequence(str,newStr,current,result){
//     // console.log(str)
//     if(newStr.length > -1){
//     result.push(newStr.join(" "))
//         // console.log(newStr);
        
//     }
//     if(current == str.length){
//         // console.log(str)
//         return;
//     }
    
//     for(var i = current; i < str.length; i++){
//         // console.log(str)
//         newStr.push(str[i]);
//         generateSubsequence(str,newStr,i+1,result);
//         newStr.pop();
    
//     }
// }

function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var N = +input[0];
    var str = input[1].trim().split(" ").map(Number);
    // for(let i=0;i<input[1].length;i++){
    //   str+= input[i];
    // }
    // .sort((a,b) => a-b);
    // console
    //var current = 0;
  // console.log(input);
    
  //   generateSubsequence(str,[],current,result);
  //   var arr = result;
  //   let obj = {};
  //    for (let i = 0; i < arr.length; i++) {
  //   obj[arr[i]] ? obj[arr[i]]++ : (obj[arr[i]] = 1);
  // }
  // console.log(obj)
    
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3
       5 1 10`);
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
  
  
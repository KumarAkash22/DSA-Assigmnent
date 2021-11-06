function runProgram(input) {
    // Write code here
   var input = input.split("").map(Number);
   let m = print(input,input.length-1,[]);
   console.log(m.reverse().join(" "))
  }
  var arr = ["zero","one","two","three","four","five","six","seven","eight","nine",];
function print(input,n,str){
    if(n<0){
        return str;
    }
    str.push(arr[input[n]]);
    return print(input,n-1,str)
}

  if (process.env.USERNAME === "admin") {
    runProgram(`567`);
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
  
  
function binary(num,str){
    // console.log(num)
    if(num < 1){
    console.log(str);
    return str;
    }
    var res = num%2 
    num = Math.floor(num/2);
    str = res + str; 
    return binary(num,str);

}
function runProgram(input) {
    // Write code here
    var input = input.split("\n").map(Number);
    var testcases = input[0];
    for(var i = 1; i <= testcases;i++){
        var num = input[i];
        binary(num, "");
}
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1
    15`);
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
  
// const name = ["A","B","c"];
// name[0] = "Z"
// console.log(name);
  
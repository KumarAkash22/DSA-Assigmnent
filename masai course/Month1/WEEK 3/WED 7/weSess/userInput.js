function runProgram(input){
   input = input.trim().split("\n");
   var testcaseAndEle = +input[0];
   

   var line = 1;
   for(var i = 0; i < testcaseAndEle; i++){ 
      var size = input[line].trim().split(" ").map(Number);
      line ++;
      var arr = input[line].trim().split("");
      line++;
      console.log(size, arr);
      if(arr.charCodeAt("a") > 67){
         console.log("Char")
      } 
   }
}
if (process.env.USERNAME === "admin") {
    runProgram(`3
    5
    ab2cd
    5
    acfgh
    3
    123`);     
} else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
   read += input;
});
process.stdin.on("end", function () {
   read = read.replace(/\n$/,"")
  runProgram(read);
});

process.on("SIGINT", function () {
   read = read.replace(/\n$/,"")
   runProgram(read);
   process.exit(0);
})
}
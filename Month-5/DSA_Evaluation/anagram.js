function anagram(str1,str2){
    if(str1.length !=str2.length){
        return "False"
    }
    for(var i = 0; i < str2.length; i++){
        if(str1[i] !== str2[i]){
            return "False";
           }
    }
    return "True"
}
function runProgram(input) {
    // Write code here
   var input = input.split("\n");
   var testCase = +input[0];
   var line = 1;
   for(var i = 0; i < testCase; i++){
       var str1 = input[line++].trim().split("");
       var str2 = input[line++].trim().split("");
       str1.sort();
       str2.sort();
       console.log(anagram(str1,str2))
   }
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    abcd
    dcab
    aa
    aaa`);
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
  
  
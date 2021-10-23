function unique(str){
    var obj = {}
    var res = "";
for(var i = 0; i < str.length; i++){
    if(obj[str[i]]===undefined){
        obj[str[i]]=1;
    }else{
        obj[str[i]]++;
    }
  }
  for(key in obj){
    res+=key;
  }
  console.log(res)
}
function runProgram(input) {
    
    var str = input.split(" ").join("");
    unique(str);
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`aaaabbbbbcccccdddd`);
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
  
  
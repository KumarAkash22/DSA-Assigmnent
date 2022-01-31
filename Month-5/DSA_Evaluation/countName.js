function CountName(arr){
    var obj = {};
    for(var i = 0; i < arr.length; i++){
        if(obj[arr[i]] == undefined){
            obj[arr[i]] = 1;
        }else{
            obj[arr[i]]++;
        }
    }
    for(key in obj){
        console.log( key,obj[key])
    }
    
    
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var N = +input[0];
    var line = 1;
    var arr = []
    for(var i = 0; i < N; i++){
        arr.push(input[line++].trim());
        arr.sort()
    }
    CountName(arr);
    
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3
    school
    masai
    masai`);
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
  
  
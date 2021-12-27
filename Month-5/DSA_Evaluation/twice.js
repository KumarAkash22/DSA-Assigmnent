function twice(N,arr1){
    var obj = {};
    for(var i = 0; i < N*2-1; i++){
        if(obj[arr1[i]] == undefined){
            console.log()
            obj[arr1[i]] = 1;
        }else{
            obj[arr1[i]]++;
        }
    }
    for(key in obj){
        if(obj[key] == 1){
            return key
        }
    }
    // console.log(obj)
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCases = +input[0];
    var line = 1;
    for(var i = 0; i < testCases; i++){
        var N = +input[line++].trim();
        var arr = input[line++].trim().split(" ").map(Number);
        var arr1 = arr.sort((a,b)=>{
            return a-b;
        })
        // console.log(arr1);
        console.log(twice(N,arr1))
    }

   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1
    5
    1 2 1 3 4 4 5 2 3`);
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
  
  
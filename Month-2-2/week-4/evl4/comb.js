function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testcase = +input[0];
   var line = 1;
   for(var i = 0; i < testcase; i++){
       var N = +input[line++].trim();
       var arr1 = input[line++].trim().split(" ").map(Number);
       var M = +input[line++].trim();
       var arr2 = input[line++].trim().split(" ").map(Number);
       for(var j =0; j < arr1.length; j++){
       arr2.push(arr1[j]);
       }
       var obj = {}
       for(var i = 0; i < arr2.length; i++){
        if(obj[arr2[i]]===undefined){
            obj[arr2[i]]=1;
        }else{
            obj[arr2[i]]++;
        }
    }
    
    var res = ""
    for(key in obj){
        res+=key+" "   
    }
    console.log
   }
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1
    4
    -3 5 6 2 
    5
    1 2 3 4 5`);
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
  
  
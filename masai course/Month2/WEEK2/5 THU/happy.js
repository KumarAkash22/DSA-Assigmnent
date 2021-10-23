function sp(arr){
    var sum =0;
    for(var j = 0; j < arr.length; j++){
        sum+=arr[j]**2;
         
      }  
      return sum;
    }
   

function runProgram(input) {
    // Write code here
    input = input.split("\n");
    var testCase = input[0];
    sum = 0;
    var res = 0;
    for(var i = 1; i <= testCase; i++){
        var arr = input[i].trim().split("").map(Number);
        var store = sp(arr); 
        console.log(String(store));
        // for(var j = 0; j < testCase; j++){
        //   var spl = store%10;
        //   console.log(spl);
        // }
        
      }
    
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3
    19
    2
    312082396
    `);
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
  
  
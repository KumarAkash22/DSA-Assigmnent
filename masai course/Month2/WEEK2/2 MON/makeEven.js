function runProgram(input) {
    // Write code here
    input = input.split("\n");
    var testCases = input[0];
    var line = 1;
    var sum = 0;
    for(var i = 1; i <=testCases; i++){
        var size = +input[line++].trim();
        var arr = input[line++].trim().split(" ").map(Number)
        for(var j = 0; j < size; j++){
            sum+=arr[j];
        } 
        console.log(sum)
        if(sum%2 == 0){
            console.log("YES");
        }else{
            console.log("NO")
        }
        sum = 0;
        //console.log(size,arr);
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`10
    8
    76 14 96 23 48 99 20 50
    10
    22 90 75 14 95 51 21 60 36 35
    10
    14 27 73 30 79 2 17 12 16 62
    8
    28 36 19 26 66 1 53 54
    8
    6 90 65 59 46 12 98 17
    9
    75 88 90 91 76 24 80 72 79
    8
    61 33 97 59 9 65 77 41
    7
    20 28 21 90 2 21 20
    5
    75 85 12 16 51
    6
    27 75 87 47 49 51`);
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
  
  
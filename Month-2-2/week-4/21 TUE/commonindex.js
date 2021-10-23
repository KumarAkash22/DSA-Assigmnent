function commonIndexofArray(arr1,arr2){
        var first = 0;
        var second = 0;
        var ans = "";
        var count = 0;
        while(first < arr1.length && second < arr2.length){
            if (arr1[first] == arr2[second]){
                ans+=(arr1[first])+" ";
                count++
                first++;
                second++;
            }else if (arr1[first] > arr2[second]) {
                second++;
            }
            else{
                first++;
            }
        }
        if(count > 0){
        return ans;
        }else{
            return "-1"
         }

    }
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCases = +input[0];
    var line = 1;
    for(var i = 0; i < testCases; i++){
        var arr1Len = +input[line++].trim();
        var arr1 = input[line++].trim().split(" ").map(Number);
        var arr2Len = +input[line++].trim();
        var arr2 = input[line++].trim().split(" ").map(Number);
       var res =  commonIndexofArray(arr1,arr2);
        console.log(res)
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    6
    1 2 3 4 5 6
    3
    3 3 5
    4 
    1 2 3 4
    4 
    5 6 7 8`);
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
  
  
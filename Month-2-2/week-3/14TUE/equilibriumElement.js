function check(rightArr, leftArr, N){
    for(var k = 0; k < N; k++){
        if(rightArr[k] == leftArr[k]){
          return (k+1);
        }
    }
     return "-1"
    }
    function equilibriumElement(N, arr){
        //write code here
      var leftArr = [];
      var rightArr = [];
      var sum = 0;
      var sum1 = 0;
      var count = 1;
      for(var i = 0; i < N; i++){
        //leftArr[i] = sum;
        leftArr.push(sum);
        sum+=arr[i];
       // leftArr+=sum+" "; 
      }
      //console.log(leftArr);
      for(var j = N-1; j >= 0; j--){
        rightArr.push(sum1)
        sum1+=arr[j];
        //rightArr+=sum1+" "; 
       // console.log(rightArr);
      }
      rightArr.reverse();
      console.log(check(rightArr, leftArr, N));
      
      
      
    }
function runProgram(input) {
    // Write code here
    var input = input.split("\n")
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
     equilibriumElement(N,arr);
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5
    3 3 5 5 1`);
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
  
  
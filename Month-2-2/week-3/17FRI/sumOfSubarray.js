function check (N, K , arr){
  var left = 0;
  var right = N-1;
  var sum = 0;
  for(var i = 0; i < N; i++){
    sum+=arr[i] ;    
      if(sum == K){
          return "Yes";
      }while(sum > K){
        sum+= -arr[left];
        left++;
        //console.log(sum)
      }
      if(sum == K){
        return "Yes";
    }
   }  
  return "No"
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCases = +input[0];
    var line = 1;
    for(var i = 0; i < testCases; i++){
        var [N, K] = input[line++].trim().split(" ").map(Number);
        var arr = input[line++].trim().split(" ").map(Number);
        console.log(check(N,K,arr));
     }
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3
    5 3
    1 2 1 3 4
    4 5
    1 2 1 3
    3 2
    1 2 1`);
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
  
  
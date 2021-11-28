function danceParty(M,N,boy,girl){
    if(M > N){
        return "NO";
    }
    var i = 0;
    var boy1 = boy.sort((a,b) =>{
        return a-b;
    })
    var girl1 = girl.sort((a,b) =>{
        return a-b;
    })
    while(i < M){
        if(boy1[i] <= girl1[i]){
            return "NO"
        }
        i++;
    }
    
    // console.log(boy1,girl1);
    return "YES"
}
function runProgram(input) {
    // Write code here
   var input = input.split("\n");
   var testcases = +input[0];
   var line = 1;
   for(var i = 0; i < testcases; i++){
        var [M,N] = input[line++].trim().split(" ").map(Number);
        var boy = input[line++].trim().split(" ").map(Number);
        var girl =input[line++].trim().split(" ").map(Number);
       console.log(danceParty(M,N,boy,girl))
   }
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1
    4 5
    2 5 6 8 
    3 8 5 1 7 `);
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
  
  
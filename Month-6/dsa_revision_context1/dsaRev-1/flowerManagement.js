function flower (M,N,arr){

    for(var i = 0; i < M; i++){
        if(arr[i] == 0 && arr[i-1] == 0 && arr[i+1] == 0){
                N--;
                arr[i] = 1;
            
        }
        else if(i == 0 ){
            if(arr[i+1] == 0 && arr[i] == 0){
                N--;
                arr[i] = 1;
            }
        }else if (i == M-1){
            if(arr[M-2] == 0 && arr[i] == 0){
                N--;
                arr[i] = 1
            }
        }  
        if(N == 0){
            break;
        }    
    }
    // console.log(N)
    if(N == 0){
        return "Yes"
    }else{
        return "No"
    }
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCases = +input[0];
    var line = 1;
    for(var i = 0; i < testCases; i++){
        var [M,N] = input[line++].trim().split(" ").map(Number);
        var arr = input[line++].trim().split(" ").map(Number);
        console.log(flower(M,N,arr))
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5
    8 1
    0 0 1 1 0 1 1 1
    10 3
    1 1 1 1 0 1 0 0 1 1
    7 2
    0 1 0 0 1 0 0
    8 3
    0 0 0 1 0 1 1 1
    5 1
    0 0 1 1 1`);
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
  
  
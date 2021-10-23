function masaiTraversalAndQueries(N, M, q, arr){
    //write code here
  var res1 = "";

    if(q%2 == 1){

        for(var a = 0; a < N; a++){
            if(a%2==0){
                for(b = 0; b < M; b++){
                    res1+=arr[a][b]+" ";
                }
            }else{
                for(b = M-1; b >= 0; b--){
                    res1+=arr[a][b]+" ";
                }
            }
        }
    }else{
        for(var a = 0; a < N; a++){
            if(a%2==0){
                for(b = M-1; b >= 0; b--){
                    res1+= arr[a][b]+" ";
                }
            }else{
                for(b = 0; b < M; b++){
                    res1+=arr[a][b]+" ";
                    
                }
            }
        }
    }
    console.log(res1);
  

  
}

function runProgram(input) {
    // Write code here
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    3 3 1
    1 2 3
    4 5 6
    7 8 9
    3 3 2
    1 2 3
    4 5 6
    7 8 9
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
  
  
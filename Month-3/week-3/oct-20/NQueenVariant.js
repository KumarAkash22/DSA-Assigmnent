let count = 0;
function checkit(cheseBoard,row,col,N){
   for(let i = 0; i < N; i++){
       if(cheseBoard[row][i]){
           return true;
       }
   }
   for(let i = 0; i < N; i++){
       if(cheseBoard[i][col]){
           return true;
       }
   }
   for(let i = 0; i < N; i++){
        for( let j = 0; j < N; j++){
            if(((i + j) === (row + col)) && cheseBoard[i][j]){
                return true;
            }
            if(((i - j) === (row - col)) && cheseBoard[i][j]){
                return true;
            }
        }
   }
   return false;
}  
function queen(j,cheseBoard,N){
    if(N === 0) {
        count = count+1;
        return true;
    }
    for(let i = 0; i < cheseBoard.length; i++){
            // console.log(i,j)
            if(checkit(cheseBoard,i,j,cheseBoard.length)){
                continue;
            }else{
                cheseBoard[i][j] = 1;
                queen(j+1,cheseBoard,N-1);
                cheseBoard[i][j] = 0;
            }
    }
    return false;
}
function runProgram(input) {
    // Write code here
    let N = +input;
   let cheseBoard = [...Array(N)].map(e=>Array(N).fill(0));
//    console.log(cheseBoard)

   queen(0,cheseBoard,N);
//    console.log(possible)
   console.log(count)
  }


  if (process.env.USERNAME === "admin") {  
    runProgram(`9`);
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
      process.exit(0) ;
    });
  }
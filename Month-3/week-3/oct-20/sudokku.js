function checkit(sudokkuBoard, i, j, b) {
    let row = (Math.floor(i/3))*3;
    let col = (Math.floor(j/3))*3;
    // console.log(row,col)
    //condition for the small square check
    for (let k = row; k < row + 3; k++) {
      for (let l = col; l < col + 3; l++) {
        if (sudokkuBoard[k][l] === b) {
          return false;
        }
      }
    }
    //condition for the row check
    for (let m = 0; m < sudokkuBoard.length; m++) {
      if (sudokkuBoard[i][m] === b) {
        return false;
      }
    }
    //condition for  the column check
    for (let x = 0; x < sudokkuBoard.length; x++) {
      if (sudokkuBoard[x][j] === b) {
        return false;
      }
    }
    return true;
  }
  
  function runProgram(input) {
    // Write code here
    input = input.split("\n");
    let n = input.length;
    let sudokkuBoard = [];
    for (let i = 0; i < n; i++) {
      let matrix = input[i].trim().split(" ").map(Number);
      sudokkuBoard.push(matrix);
    }
    // console.log(sudokkuBoard)
    let fillKro = [];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (sudokkuBoard[i][j] === 0) {
          fillKro.push([i, j]);
        }
      }
    }
    // console.log(fillKro[20]);
    // console.log(fillKro);
    let possible=sudokku(fillKro, 0);
    if(possible){
      for(let i = 0; i < sudokkuBoard.length; i++){
        console.log(sudokkuBoard[i].join(" "));
      }
    }else{
      console.log(-1);
  }
  
  function sudokku(fillKro, cur) {
      if (cur === fillKro.length) {
      return true;
    }
    // console.log(cur)
    let [i, j] = [fillKro[cur][0], fillKro[cur][1]];
  // console.log(fillKro[cur]);
    for (let b = 1; b < 10 ; b++) {
      if (checkit( sudokkuBoard, i, j, b)) {
        sudokkuBoard[i][j] = b;
        // console.log(sudokkuBoard);
        let matrix=sudokku( fillKro, cur + 1);
        if(matrix){
          return true;
        }
        sudokkuBoard[i][j] = 0;
      }
    }
    return false;
  }
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`0 4 0 0 0 0 1 7 9 
      0 0 2 0 0 8 0 5 4 
      0 0 6 0 0 5 0 0 8 
      0 8 0 0 7 0 9 1 0 
      0 5 0 0 9 0 0 3 0 
      0 1 9 0 6 0 0 4 0 
      3 0 0 4 0 0 7 0 0 
      5 7 0 1 0 0 2 0 0 
      9 2 8 0 0 0 0 6 0`);
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
    function runProgram(input) {
        // Write code here
        input= input.split("\n");
        var testCases = +input[0];
        var line = 1;
        for(var i = 1; i <= testCases; i++){
            var row = +input[line++].trim();
            var arr = [];
            for(var j = 0; j < row; j++){
                arr.push(input[line++].trim().split(" ").map(Number));
            }
            //console.log(arr)
            res = "";
            res1= "";
            res2 = "";
            
            for(var k = 0; k < 1; k++){
                for(var l = 0; l <= row - 2; l++){
                res+=arr[k][l]+" "; 
                    }
                }
    
                for(var a = 0; a <= row-1; a++){
                    for(var b = row-1; b >= 0; b--){
                        if(a+b==row - 1){
                        res1+=arr[a][b]+" ";
                        }
                    }
                }     
    
            for(var x = row-1; x < row; x++){
                for (var y = 1; y < row; y++){
                    res2+=arr[x][y]+" ";   
                    }     
            }  
            console.log(res+res1+res2)
        } 
      }
      if (process.env.USERNAME === "admin") {
        runProgram(`1
        3
        1 2 3
        4 5 6
        7 8 9`);
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
   
 
  
  
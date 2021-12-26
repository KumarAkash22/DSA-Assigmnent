
function stock(N,arr,small,index){
    if(small == arr[N-1]){
        return 0;
    }
    var max = 0;
    // console.log(N,arr,small,index)
    for(var i = index; i < N; i++){
      if(max < arr[i]){
        max = arr[i];
      }
     
    }
    var profit = max - small;
    return profit 
    
    
}
function runProgram(input) {
    // Write code here
   var input = input.split("\n");
   var testcases = +input[0];
   var line = 1;
   var index = 0;
   for(var i = 0; i < testcases; i++){
       var N = +input[line++].trim();
       var arr = input[line++].trim().split(" ").map(Number);
       var small = Math.min(...arr);
       index = (arr.indexOf(small));
       console.log(stock(N,arr,small,index))
    //    console.log(small)

   }
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    6
    7 1 5 3 6 4
    4
    4 3 2 1
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
  
  
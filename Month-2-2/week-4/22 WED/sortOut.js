function swap(arr,index,i,j){
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  temp = index[i];
  index[i] = index[j];
  index[j] = temp;
  return index[j];
}
function runProgram(input) {
    // Write code here
   var input = input.split("\n");
   var N = +input[0];
   var arr = input[1].trim().split(" ").map(Number);

   var index = [];
   for(var i = 0; i < arr.length; i++){
     index.push(i);
   }
   //console.log(index)
   for(var i = 0; i < N; i++){
     for(var j = 0; j < N-i; j++){
       if(arr[j+1] < arr[j]){
        //var res= swap(arr,index,j,j+1);
        [arr[j+1],arr[j]] = [arr[j],arr[j+1]];
        [index[j+1],index[j]] = [index[j],index[j+1]]; 
        //
        }
      }     
   }
   console.log(index.join(" "));
}
  if (process.env.USERNAME === "admin") {
    runProgram(`5
    4 5 3 8 1`);
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
  
  
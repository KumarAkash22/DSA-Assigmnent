
function subArr(arr){
  even = 1;
  odd = 0;
  sum = 0;
  for (i=0;i<arr.length;i++){
    sum += arr[i];
    if (sum % 2 == 0){ 
       even++
    }else{
      odd++;
    }
  }
  even = (even * (even - 1))/2;
  odd = (odd * (odd - 1))/2;
  return even + odd;
}
function runProgram(input) {
    input = input.split("\n");
    var size = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    console.log(subArr(arr));
  
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5
    2 5 4 4 4`);
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
  
  
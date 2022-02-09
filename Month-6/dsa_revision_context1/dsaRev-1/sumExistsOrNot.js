function exist(N,arr,key){
    var left = 0;
    var right = N-1;
    var sum = 0;
    while(left < right ){
        sum = arr[left] + arr[right];
        console.log(sum,left,right)
        if(sum == key){
            return "yes"
        }else if(sum < key){
            left++;
        }else if(sum > key){
            right--;
            sum-=arr[right]
        }
    }
    return "no"
}
function runProgram(input) {
    // Write code here
   var input = input.split("\n");
   var N = +input[0];
   var arr = input[1].trim().split(" ").map(Number);
   var key = +input[2].trim();
   console.log(exist(N,arr,key));
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`9
    1 2 3 4 5 6 7 8 9
    24`);
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
  
  
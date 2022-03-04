function numberOfSameElement(arr1,arr2,N){
    var count = 0;
    var left = 0;
    var right = N - 1;
    while(left < N && right >= 0){
        if(arr1[left] == arr2[right]){
            count++;
            left++;
            right--;
        }else if(arr1[left] > arr2[right]){
            right--;

        }else if(arr1[left] < arr2[right]){
            left++;
        }
    }
    return count;
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCases = +input[0];
    var line = 1;
    for(var i = 0; i < testCases; i++){
        var N = input[line++].trim();
        var arr1 = input[line++].trim().split(" ").map(Number);
        var arr2 = input[line++].trim().split(" ").map(Number);
        console.log(numberOfSameElement(arr1,arr2,N))
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1
    9
    2 2 2 3 5 5 6 8 9
    9 8 7 6 5 3 2 2 2`);
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
  
  
function takeOutMaximum(arr,k){
  max = 0;
  sum = 0;
  for (i=0;i<k;i++) {
    sum += arr[i];
  }
  if(max < sum){
    max = sum;
  }
    for (i=k;i<arr.length;i++){
      sum -= arr[i-k];
      sum += arr[i];
      if(max < sum){
        max = sum;
      }
    }
  return max;
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var [size, target] = input[0].split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    //console.log(size,target,arr);
    console.log(takeOutMaximum(arr,target));
    
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`100 5
    56 96 57 87 65 82 2 74 60 81 66 84 89 28 78 62 100 58 96 29 41 43 92 37 38 38 58 81 64 -8 9 13 16 16 54 37 32 5 84 -1 30 91 24 31 85 71 13 3 56 49 91 74 28 8 85 81 78 13 69 89 72 33 99 14 71 84 26 89 3 70 33 75 88 93 12 96 35 15 6 25 74 -4 11 68 73 59 41 16 26 42 84 81 34 50 8 -4 16 20 71 23`);
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
  
  
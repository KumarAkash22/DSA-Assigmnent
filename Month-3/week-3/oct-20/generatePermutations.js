function permutation(arr,current){
    if(current == arr.length){
        console.log(arr.join(" "));
        return;
    }
    for(var i = current; i < arr.length; i++){
        [arr[i],arr[current]] = [arr[current],arr[i]];
        permutation(arr,current+1);
        [arr[i],arr[current]] = [arr[current],arr[i]];
    }
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var current = 0;
    permutation(arr,current);

   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3
    1 2 3`);
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
  
  
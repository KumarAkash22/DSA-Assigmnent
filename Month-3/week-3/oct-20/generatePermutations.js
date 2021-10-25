function permutation(arr,current,newArr){
    if(current == arr.length){
      newArr.push(arr.join(" "))
        // console.log(newArr);
        return;
    }
    for(var i = current; i < arr.length; i++){
        [arr[i],arr[current]] = [arr[current],arr[i]];
        permutation(arr,current+1,newArr);
        [arr[i],arr[current]] = [arr[current],arr[i]];
    }
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var current = 0;
    let newArr = [];
    permutation(arr,current,newArr);
    console.log(newArr.sort().join("\n"))
   
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
  
  
function search(arr,low, high, key){
    if(low > high){
        return -1
    }
    let mid = Math.floor(low + (high - low)/2);
    if(arr[mid] == key){
        return mid
    }
    if (arr[low] <= arr[mid]) {
        
        if (key >= arr[low] && key <= arr[mid]){
            return search(arr, low, mid - 1, key);
        
        }else{
            return search(arr, mid + 1, high, key);
        }
    }
    if (key >= arr[mid] && key <= arr[high]){
			return search(arr, mid + 1, high, key);

    }else{
        return search(arr, low, mid - 1, key);
    }
 
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var [N,key] = input[0].split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    console.log(search(arr,0, N-1,key))
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`6 6
    3 4 7 9 1 2`);
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
  
  
function bsr(arr1,K,high,low){
while(low <= high){
    var mid = Math.floor(low + (high-low)/2);
    if(K == arr1[mid]){
        return true;
    }else if(K < arr1[mid]){
        return bsr(arr1,K, mid-1,low)
    }else{
        return bsr(arr1,K,high,mid+1)
    }
}
return false
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var [N,K] = input[0].split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    var arr1 = arr.sort((a,b) =>{
       return a-b; 
    });
    var low = 0;
    var high = N-1;

   var res = bsr(arr1,K,high,low);
   if(res == true){
       console.log("1");
   }else{
       console.log("-1")
   }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5 0
    2 -2 0 5 9`);
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
  
  
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let [k,n]=input[0].trim().split(" ").map(Number);
    let arr=input[1].trim().split(" ").map(Number);
   
   
  console.log(move(arr,k,n,0));
    
   
  }
   
   function  move(arr,k,n,cur){
        if(k===0){
            return 1;
        }
        if(k<0){
            return 0;
        }
        let sum=0;
        for(let i=0;i<n;i++){
            sum+=move(arr,k-arr[i],n,i+1);
        }
       
        return sum;
    }
  if (process.env.USERNAME === "admin") {
    runProgram(`3 3
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
      process.exit(0) ;
    });
  }
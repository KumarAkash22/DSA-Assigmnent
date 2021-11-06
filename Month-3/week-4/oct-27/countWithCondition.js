
function add(res,target,count){
    console.log(res)
    var sum = 0;
   
    for(var i = 0; i < res.length; i++){
        sum+=res[i];
        // console.log(sum)
        if(sum == target){
            count++
            
        }
    }
    
    console.log(count);

}
function gs(str,newStr,current,target,count){
    // console.log(str)
    // var res = []
    if(newStr.length > 0){
      // console.log(newStr);
      var sum = 0;
      for(var i = 0; i < newStr.length; i++){
          sum+=newStr[i];
          // console.log(sum)
      }
          if(sum == target){
              count.push(1)
              
          
      }
      
      // console.log("sum",sum);
        
    }
    // add(res,target,count);
    if(current == str.length){
        // console.log(str)
        return;
    }
    for(var i = current; i < str.length; i++){
        // console.log(str)
        newStr.push(str[i]);
        gs(str,newStr,i+1,target,count);
        newStr.pop();
    }
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var [N,target] = input[0].split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    var current = 0;
    var count = [];
    var newStr = [];
    gs(arr,newStr,current,target,count);
    // console.log(add())
    console.log(count.length)
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`6 10
    2 3 5 6 8 10`);
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
  
  
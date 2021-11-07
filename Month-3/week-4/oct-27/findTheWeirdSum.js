// var count = 0;
function wierdSum (n,arr,current,ans,maxNum){
  if(ans.length > 0){
      let sum = 0;
      for(let i = 0; i < ans.length; i++){
          sum+=ans[i];
      }
      if(sum===maxNum){
         count++;
      }
  }
  for(let i = current; i < n; i++){
      ans.push(arr[i]);
      wierdSum(n,arr,i+1,ans,maxNum);
      ans.pop();
  } 
}
function runProgram(input){
 input = input.trim().split("\n");
 let testcases = +input[0];
 let line = 1;
 for(let i = 0; i < testcases; i++){
     let n = +input[line++];
     let arr = input[line++].trim().split(" ").map(Number);
     let current = 0;
     let ans = [];
     let maxNum = Math.max(...arr);
  //    console.log(maxNum)
     let index = arr.indexOf(maxNum);
  //    console.log(maxNum,index)
      arr.splice(index,1);
      // console.log(maxNum,index,arr)
      count = 0;
    wierdSum(n-1,arr,current,ans,maxNum);
    // console.log(count)

    if(count > 0){
        console.log("Yes");
    }else{
        console.log("No");

    }
  }
}
if (process.env.USERNAME === "admin") {
  runProgram(`3
  3
  1 2 3
  4
  0 1 2 3
  4
  2 3 6 10`);
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


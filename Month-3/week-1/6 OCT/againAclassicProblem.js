function check(arr){
  var Stack = [];
  var top = arr.length-1;
  var flag = 0;
  for (var i = 0; i < arr.length; i++){
    if( arr[i] == '(' || arr[i] == '{' || arr[i] == '[' ){
      Stack.push(arr[i]); 
    }else{
      if(arr.length%2==1 || Stack.length == 0){
        flag = 1;
        break;
      } 
      else{
          Stack.pop();
        }
    }
  }
if(flag == 1 ){
  return "not balanced";
}else{
  if(Stack.length == 0){
    return "0"
  }else
    return "1"   
}
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCases = +input[0];
    for(var i = 1; i <= testCases; i++){
        var arr = input[i].trim().split("")
        console.log(check(arr));
    }
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3
    {([])}
    (){
    ([])`);
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
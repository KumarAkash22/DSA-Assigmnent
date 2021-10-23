// function check (op,el){
//     var Stack1 = [];
//     if(op[i] == "push"){
//         for(var i = 0; i < el.length; i++){       
//                 Stack1.push(el[i]);
//         }
//     }
//         return Stack1;
//         // console.log(op.length)
// }
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCases = +input[0];
    var Stack1 = [];
    var Stack2 = [];
    for(var i = 1; i <= testCases; i++){
    var arr = input[i].trim().split(" ");  
    var op = arr[0];
    var el = +arr[1];
    var min = 1000000000;
    if(op == "push"){
      Stack2.push(el);
      if(min <= el){
        Stack1.push(el)
          min = el;
       }
   }else if(op =="pop"){
        Stack2.pop(el)
    }
    //console.log(check(op,el));
    
    
    
    
     }
     console.log(arr1);
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`8
    push 5
    push 3
    push 1
    getMin
    push 4
    getMin
    pop
    getMin`);
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
  
  
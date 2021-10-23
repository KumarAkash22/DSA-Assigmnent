// function check (a){
//     count = 0;
//     for(var i = 0; i < a.length; i++){
//         if(a[i]== "a i o u"){
//             count++
//         }
//     }
//     console.log(count);
// }
function runProgram(input) {
    // Write code here
    var a = input.split("");
    
    for(var i = 0; i < a.length; i++){
        var res = ""
        for(var j = i ; j < a.length; j++){
            res+=a[j];
         var r = "";
        //  r.sort(res);
        //     console.log(r);
    //        check(a);
        }
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`dangerouscovid`);
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
  
  
function strength(vaccine1,patient1,testCase){
    for(var i = 0; i < testCase; i++){
        if(vaccine1[i] < patient1[i]){
            return "No"
        }
    }
    return "Yes"
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCase = +input[0];
    var vaccine = input[1].trim().split(" ").map(Number);
    var vaccine1 = vaccine.sort((a,b)=>{
        return a-b;
    })
    var patient = input[2].trim().split(" ").map(Number);
    var patient1 = patient.sort((a,b)=>{
        return a-b;
    })
    console.log(strength(vaccine1,patient1,testCase))
    
}
    // console.log(vaccine1,patient1);
  
  if (process.env.USERNAME === "admin") {
    runProgram(`5
    123 146 454 542 456
    100 328 248 689 200`);
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
  
  
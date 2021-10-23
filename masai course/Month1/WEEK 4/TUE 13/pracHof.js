function runProgram(input){
    input = input.trim().split("\n");
    var testcaseAndEle = +input[0];
    var line = 1;
    for(var i = 0; i<testcaseAndEle; i++){
    var size = +input[line];
    line++;
    var arr = input[line].trim().split(" ").map(Number);
    line++
    for(var j = 0; j < arr.length; j++){
        var count = 1;
        for(var k = i+1; k < arr.length; k++){
            if(arr[k] < arr[k -1]){
                count++;
            }else{
                break;
            }
        }
        console.log(count);
    }        
    //console.log(size, arr);
    }
 }
 if (process.env.USERNAME === "admin") {
     runProgram(`2
     2
     1 1
     6
     1 2 1 2 3 1
     `);     
 } else {
 process.stdin.resume();
 process.stdin.setEncoding("ascii");
 let read = "";
 process.stdin.on("data", function (input) {
    read += input;
 });
 process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
 });
 
 process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
 })
 }
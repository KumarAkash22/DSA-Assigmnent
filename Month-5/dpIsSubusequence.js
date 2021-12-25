function subseq(str1,str2,s1,s2,count){
  if(s1 == 0){
      return "YES";
  }
  var j = 0;
  
  for(var i = 0; i < s2; i++){
      if(str1[j] == str2[i]){
          j++;
          count++;
      }
  }
  // console.log(count)
  if(count == s1){
      return "YES"
  }else{
      return "NO"
  }
}
function runProgram(input) {
  // Write code here
  var input = input.split("\n");
  var testcases = +input[0];
  var line = 1;
  for(var i = 0; i < testcases; i++){
      var str1 = input[line++].trim();
      var s1 = str1.length;
      var str2 = input[line++].trim();
      var s2 = str2.length; 
      var count = 0;
      console.log(subseq(str1,str2,s1,s2,count));
  } 

 
}
if (process.env.USERNAME === "admin") {
  runProgram(`2
  abc
  adbce
  ax
  xaa`);
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


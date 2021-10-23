function makeSubstring(s){
    var count = 0;
  for(var i = 0; i<s.length;i++){
    for(var j = i; j<s.length; j++){
      var str="";
      for(var k = i; k<=j; k++){
        str+=s[k];
        }
      if(str[0]==str[str.length-1]){
        count++;
     // console.log(str);
    }
         }
  }
         return count;
  }
  
  function runProgram(input){
      var s = input;
        console.log(makeSubstring(s));
  }
 
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
  });
  
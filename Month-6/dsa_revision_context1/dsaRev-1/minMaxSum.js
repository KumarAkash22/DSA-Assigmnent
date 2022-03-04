function findMinMax(sortData,N,M){
    var min = 0;
    var max = 0;
    var difference = N - M;
    for(var i = 0; i < N - difference; i++){
        min+=sortData[i];
    }
    for(var j = difference; j < N; j++){
        max+= sortData[j];
    }
    var maxMinDiffer = max - min;
    return maxMinDiffer
}
function selectionSort(arr,N){
    for(var i = 0; i < N-1; i++){
        var min = i;
        for(var j = i+1; j < N; j++){
            if(arr[min] > arr[j]){
                min = j;
            }
        }
        [arr[min],arr[i]] = [arr[i],arr[min]];
    }
    return arr;
}
function runProgram(input) {
    // Write code here
   var input = input.split("\n");
   var testCases = +input[0];
   var line = 1;
   for(var i = 0; i < testCases; i++){
       var [N, M] = input[line++].trim().split(" ").map(Number);
       var arr = input[line++].trim().split(" ").map(Number);
       var sortData = selectionSort(arr,N)
       var minMax = findMinMax(sortData,N,M);
       console.log(minMax);
   }
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1
    5 1
    1 2 5 3 4`);
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
  
  
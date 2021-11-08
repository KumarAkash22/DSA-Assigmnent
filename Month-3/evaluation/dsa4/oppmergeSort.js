function marg(arr,current,a,N){
    var b = a - 1 + 1;
    var c = N - a;
    var arr1 = [];
    var arr2 = [];
    for(var i = 0; i < b; i++){
        arr1[i] = (arr[current+i])
    }
    for(var j = 0; j < c; j++){
        arr2[j] = (arr[current + a + j]);
    }
    i = 0;
    j = 0;
    k = current;
    while(i < b && j < c){
        if(arr1[i] <= arr2[j]){
            arr[k] = (arr1[i]);
            i++;
        }else{
            arr[k] = (arr2[j]);
            j++;
        }
        k++;
    }
    while(i < b){
        arr[k] = (arr1[i]);
        i++;
        k++;
    }
    while(j < c){
        arr[k] = (arr2[j]);
        j++;
        k++;
    }
}


function rbs(arr,current,N){
    if(current >= N){
        return ;
    }
    var a = current+parseInt((N-1/2));
    rbs(arr,current,a);
    rbs(arr,a+1,N);
    marg(arr,current,a,N)
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var current = 0;
    rbs(arr,current,N-1);

    console.log(arr.reverse().join(" "))
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5
    2 3 1 4 5`);
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
  
  
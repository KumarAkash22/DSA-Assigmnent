function carParking(K,arr1,arr2){
    var arrival = arr1.sort((a,b) =>{
        return a-b;
    })
    var departure = arr2.sort((a,b) =>{
        return a-b;
    })
    console.log(arrival,departure)
    var count = 0;
    var i = 1;
    var j = 0;
    while(i < arrival.length && j < departure.length){
        if(arrival[i] <= departure[j]){
            count++;
            i++;
            console.log(count+"+",K,i,j)
        }else{
            j++;
            count--;
            console.log(count+"-",K,i,j)
        }
        if(count > K){
            return "Not Possible"
        }
    }
    
    return "Possible";
    
    
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var K = +input[0];
    var arr1 = input[1].trim().split(" ").map(Number);
    var arr2 = input[2].trim().split(" ").map(Number);
    console.log(carParking(K,arr1,arr2));
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1
    1 3 5
    2 6 8`);
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
  
  
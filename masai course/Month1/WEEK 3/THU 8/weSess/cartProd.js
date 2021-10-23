function runProgram(input){
    var lines = input.split("\n");
    //console.log(lines);
    
    for(var i = 0; i<lines.length; i++){
        var items = lines[i].split(" ");
        var quantity = +items[1];
        var price = +items[2];
        //console.log(items);
        var data = {};
        data.name = items[0];
        data.quantity = +items[1];
        data.price = +items[2];
        //console.log(quantity,price);
    
    total = function(quantity, price){
        var  prod =quantity*price;
        return prod;
    }
}
console.log(total());
}
     
        


if (process.env.USERNAME === "admin") {
    runProgram(`Rice 2 60\nDal 3 50\nSalt 1 20`);     
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
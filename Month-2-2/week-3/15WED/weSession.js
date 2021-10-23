var number = [1,2, 3, 4,5,6,7];

number.forEach(function(el){
    console.log("Square of"+ el+ "is "+ el*el);
});


function double(el){
    return el * 2;
}
var doubleNumber = number.map(double);
console.log(doubleNumber);

var isEven = function(el){
    return el %2 == 0;
}
var evenNumber = number.filter(isEven);
console.log(evenNumber);
var isOdd = function(el){
    return el %2 == 1;
}
var oddNumber = number.filter(isOdd);
console.log(oddNumber);


var product = function(ac,el){
    return ac *el;
}
var numProd = number.reduce(product);
console.log(numProd);


var sum = function(ac,el){
    return ac + el;  
}
var oddNumSum = number.filter(isOdd).reduce(sum);
console.log(oddNumSum);


var miltiple3 = function(el){
    return el %3 == 0;
}
var cube = function(el){
    return el ** 3;
}
var m3CubeSum = number.filter(miltiple3).map(cube).reduce(sum);
console.log(m3CubeSum);
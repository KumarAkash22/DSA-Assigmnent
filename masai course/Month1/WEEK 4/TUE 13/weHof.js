var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function(el){
    console.log(el ** 2);
});


function double(el){
    return el * 2;
}
var doubleNumbers = numbers.map(double);
console.log(doubleNumbers);


function isOdd(el){
    if (el % 2 == 0){
        return false;
    }else {
        return true;
    }
}
var oddNumber = numbers.filter(isOdd);
console.log(oddNumber);


function multiply (ac ,el){
    return ac * el ;
}
var product = numbers.reduce(multiply);
console.log(product);


function add(a ,b){
    return a+b;
}
var oddSum = numbers.filter(isOdd).reduce(add);
console.log(oddSum);

function multiple3(el){
    if(el % 3 == 0){
        return true;
    

    }else{
        return false;
    }
}
 function cube (el){
     return el ** 3;
    }
var cubeSum3 = numbers.filter(multiple3).map(cube).reduce(add);
console.log(cubeSum3)    

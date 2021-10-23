var limit = 33;
count = 0;
sum = 0;
for(var i = 0; i <= limit; i++){
    if(i % 3 == 0){
        sum+= i;
        count++;
    }
}
var average = sum/count;
console.log(average); 



var startingLimit = 10;
var endingLimit = 28;
sumEven = 0;
sumOdd = 0;

for(var i = startingLimit; i <= endingLimit; i++){
    
    if(i%2 == 0){
        //console.log(i);
        sumEven+=i;
    }else{
        //console.log(i);
        sumOdd+=i;
    }
}
console.log(sumEven);
console.log(sumOdd);


var items = [43,23,67,18,90,26,65,22];
var min = 10000;
var max = 0;
for(var i = 0; i < items.length; i++){
    if(items[i] < min){
        min = items[i];
    }else if(items[i] > max){
        max = items[i];
    }
}
console.log(min);
console.log(max);



var num = 113;
var count = 0;
for(var i = 2; i<num; i++){
    if(num % i == 0){
        count++
    }    
}
if(count >= 1){
    console.log("Not Prime Number");
}else{
    console.log("Prime Number");
}




var names = ["aman", "albert", "dhaval", "swanand","pradeep"];
var conso = 0;
var vowels = 0;
for(var i = 0; i < names.length; i++){
    var name = names[i];
    for(var j = 0; j < name.length; j++){
        if(name[j] != "a" && name[j] != "e" && 
        [j] != "i" && name[j] != "o" &&
         name[j] != "u"){
            conso++;
            
        }else{
            vowels++;
        }
    }
}
console.log(conso);
console.log(vowels);
var items = [34, -87, 23, 12, 98, -2, 0];
countEven = 0;
countOdd = 0;
sumEven = 0;
sumOdd = 0;
for(var i = 0; i < items.length; i++){
    if(items[i] % 2 == 0){
        sumEven+= items[i];
        countEven++;
    }else{
        sumOdd+= items[i];
        countOdd++;
    }
}
console.log(sumEven/countEven);
console.log(sumOdd/countOdd);
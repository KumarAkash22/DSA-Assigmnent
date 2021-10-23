var number = [2,4,5,3,6,8];
var even = function(el,i){
    return (el % 2==0 && i % 2 == 0)
}
var ind = number.filter(even);
  console.log(ind)
var items = ["A", "Good", "Problem"];
var result = [];
var OddLength = function(el){
    if (el.length%2!=0){
        return result.push(el.length);
    }
}
var sum = function (ac, el){
    return ac + el;
}
items.filter(OddLength);
console.log(result.reduce(sum));
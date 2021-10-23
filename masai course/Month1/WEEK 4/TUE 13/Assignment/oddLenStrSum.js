var items =["Apple", "Windows", "Linux", "Kindle", "Quiz"];
function isOdd(el){
    if(el.length % 2 == 0){
        return false;
    }else{
        return true;
    }
}

function add(a, b){
    return a+b;
}
var result = items.filter(isOdd).reduce(add);
console.log(result.length);
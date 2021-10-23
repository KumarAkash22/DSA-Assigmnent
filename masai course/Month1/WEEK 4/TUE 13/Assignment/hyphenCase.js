var str = ["Apple", "Windows", "UBUNTU"];
var arr = str.map(function(el,i){
    return el.toLowerCase()
})
console.log(arr.join("-"));


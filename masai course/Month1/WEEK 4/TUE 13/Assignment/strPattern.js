 var items = ["apple", "windows", "ubuntu", "cola", "system"];
var result = items.filter(function(el){
    return el[0] == "a" || el[el.length-1] =="a";
})


console.log(result);
    

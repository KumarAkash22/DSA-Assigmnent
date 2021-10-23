var items = ["assignment", "problem", "media", "upload","cola"];
var result = function(el){
    if (el.charAt(0) == "a" || el.charAt(el.length -1) =="a"){
        return el;
    }
}
console.log(items.filter(result));
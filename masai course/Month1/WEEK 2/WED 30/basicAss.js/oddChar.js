items = ["Ubuntu","Windows"];
for(var i = 0; i<items.length; i++){
    var item = items[i];
    for(var j = 1; j<item.length; j = j + 2){
        console.log(item[j]);
    }
}
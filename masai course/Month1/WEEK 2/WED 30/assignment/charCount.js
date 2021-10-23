var items = ["HTML", "CSS", "JAVA", "JS", "ANDROID"];
count = 0;
for (var i = 0; i < items.length; i++){
    var item = items[i];
    for(var j = 0;  j < item.length; j++){
        count++;
    }
}
console.log(count);
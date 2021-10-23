var items =["Java", "There is a smallest natural number"];
for(var i = 0 ; i < items.length; i++){
    count = 1;
    var item = items[i];
    for(var j = 0; j < item.length; j++){
        if(item[j] == " "){
            count++;
        }
    }
    console.log(count);
}

var items =  "masai";

var reverse = "";
for(var i = items.length- 1; i >= 0; i--){
    reverse+=items[i]+"";
}
if(reverse==items){
    console.log("YES");
}else{
    console.log("NO");
}

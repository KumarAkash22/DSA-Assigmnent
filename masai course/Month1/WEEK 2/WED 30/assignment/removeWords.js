var names = ["A", "Quick", "Brown", "Fox", "Jumps", "Over", "A", "Lazy", "Dog"];
var newArr = [];
for(var i = 0; i < names.length; i++){
    var name   = names[i];
    var count = 0;    
    for(var j = 0; j < name.length; j++){
        count++;
        if(count > 3){
        newArr.push(name);
        //console.log(count);
        break;
        }
    }  
}
console.log(newArr);
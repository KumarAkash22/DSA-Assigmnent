var special ={
    item : "Masai",
    reverse : function(){
        var out = " ";
        for(var i = this.item.length-1; i >= 0; i--){
            out = out +this.item[i];
        }
        return out;
    },
    vowelsCount :function(){
        var count = 0;
        var vowels = "aeiouAEIOU"
       for(var i = 0; i < this.item.length; i++){
        for(var j = 0; j < vowels.length; j++){
            if( this.item[i] == vowels[j]){
                count++
                break;
            }
        }
    }
    console.log("Vowels Count-" + count);
}
}
console.log(special.reverse());
special.vowelsCount()

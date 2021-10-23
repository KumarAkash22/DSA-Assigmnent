var details = {
    data : [],
    average : function (){
        if(this.data.length == 0){
            return null;
        }
        var total = 0;
        for(var i = 0 ; i < this.data.length; i++ ){
            total = total + this.data[i].mk;
        }
        return total / this.data.length;
    },
    minMarks : function(){
        var min  = null;
        for(var i = 0; i< this.data.length; i++){
            if(min == null || this.data[i].mk<min.mk){
                min = this.data[i];
            }
        }
        return min;
    },
    maxMarks : function(){
        var max  = null;
        for(var i = 0; i< this.data.length; i++){
            if(max == null || this.data[i].mk>max.mk){
                max = this.data[i];
            }
        }
        return max;
    },
    addMarksData : function(name,marks){
         var mks ={nm:name, mk : marks};
         this.data.push(mks)
    }
}

details .addMarksData("Nrupul", 10); 
details .addMarksData("Prateek", 20);
details .addMarksData("Aman", 30);
details .addMarksData("Albert",5);
details.addMarksData("Yogesh",18);
console.log(details.average());
console.log(details.minMarks());
console.log(details.maxMarks());

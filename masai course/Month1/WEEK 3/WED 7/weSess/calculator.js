var calc ={
    a : 8,
    b : 4,
    addition : function(a,b){
        console.log(this.a + this.b);
    },
    subtraction : function(){
        console.log(this.a - this.b);
    },
    division : function(){
        console.log(this.a / this.b);
    },
    multiplication : function(){
        console.log(this.a * this.b);
    }
};
calc.addition(3,4);
calc.subtraction();
calc.division();
calc.multiplication();
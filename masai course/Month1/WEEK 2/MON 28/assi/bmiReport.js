var weigth = 90;              //in kg.
var heigth = 187;            //in cm.
var bmi = (weigth*10000)/(heigth*heigth);
console.log(bmi);
if(bmi<18.5){
    console.log("you're in the underweight range");
}else if ((bmi >= 18.5) && (bmi <= 24.9)){
    console.log("you're in the healthy weight range");
}else if ((bmi >= 25) && (bmi <= 29.9)){
    console.log("you're in the overweight range");
}else if ((bmi >= 30) && (bmi <= 39.9)){
    console.log("you're in the healthy weight range");
}
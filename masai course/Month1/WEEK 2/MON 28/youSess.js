var a = 6;
var b = 8;
if (a>b){
    console.log("A is larger");
}else if (b>a){
    console.log("B is larger");
}


var password1 = "Secret";
var password2 = "Password";
if(password1 !=password2){
    console.log("Wrong Password");
}else{
    console.log("Valid Password")
}

var number = 9;
if(number%2==1){
    console.log("Odd Number");
}else{
    console.log("Even Number");
}

var birth_year = 2005;
var age = 2021 - birth_year;
if(age >= 20 && age <=29){
    console.log("Twenties");
}else if(age >= 13 && age <=19){
    console.log("Teenage");
}

var age_A = 3;
var age_B = 6;
var age_C = 4;

if(age_A > age_B && age_A > age_C){
    if (age_B > age_C){
        console.log("A B C")
    }else {
        console.log("A C B");
    }
}else if(age_B > age_C && age_B > age_C){
    if(age_A > age_C){
        console.log("B A C");
    }else{
        console.log("B C A");
    }

}else {
    if(age_A > age_B){
        console.log("C A B")
    }else{
        console.log("C B A");
    }

}


if(age_A > age_B && age_A > age_C){
    if (age_B > age_C){
        console.log("C B A")
    }else {
        console.log("B C A");
    }
}else if(age_B > age_C && age_B > age_C){
    if(age_A > age_C){
        console.log("C A B");
    }else{
        console.log("A C B");
    }

}else {
    if(age_A > age_B){
        console.log("B A A")
    }else{
        console.log("A B C");
    }

}

var c = 4;
var d = 5;
c==d ? console.log("Equal") : console.log("Different");

var month = "March";
switch (month){
    case "January":
        console.log("jan");
        break;
    case "February":
        console.log("Feb");
        break;
    case "March":
        console.log("Mar");
        break;
    case "April":
        console.log("Apr");
        break;
        
    case "May":
        console.log("May");
        break;    
    case "June":
        console.log("Jun");
        break;
    case "July":
        console.log("Jul");
        break;
    case "August":
        console.log("Aug");
        break;
    case "September":
        console.log("Sep");
        break;
    case "October":
        console.log("Oct");
        break;
    case "November":
        console.log("Nov");
        break;
            
    case "December":
        console.log("Dec");
        break;            
    default :
    break;                
}
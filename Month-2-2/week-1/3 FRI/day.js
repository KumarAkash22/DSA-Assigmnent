var res = 0;
    if(day =="Sunday"){
    res+= N + 0;
    }
    else if(day =="Monday"){
       res+= N + 1;
    }
    else if(day =="Tuesday"){
        res+= N + 2;
     }
     else if(day =="Wednesday"){
        res+= N + 3;
     } 
     else if(day =="Thursday"){
        res+= N + 4;
     }
     else if(day =="Friday"){
        res+= N + 5;
     }
     else if(day =="Saturday"){
        res+= N + 6;
     }
     
     var din = res % 7;
    if(din == 0){
        console.log("Sunday")
     }
     else if(din == 1){
        console.log("Monday")
     }
     else if(din == 2){
         console.log("Tuesday")
      }
      else if(din == 3){
         console.log("Wednesday")
      } 
      else if(din == 4){
         console.log("Thursday")
      }
      else if(din == 5){
         console.log("Friday")
      }
      else if(din == 6){
         console.log("Saturday")
      } 
      
     
  
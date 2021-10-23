var num = 7;
count = 0;
i = 1;
while(i <= num){
    if(num%i==0){
        count++;
    }
    i++;
}
if(count <= 2){
    console.log("prime Number");
}else{
    console.log("Not Prime Number");
}
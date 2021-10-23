//var N = 5;
function sumthem(N,current, sum){
    if(current > N){
        console.log(sum);
    }
    var sum = sum + current;
    sumthem(N,current+1,sum);
}
sumthem(5,1,0);
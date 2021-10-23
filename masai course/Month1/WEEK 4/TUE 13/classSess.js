var arr = [1, 2, 3, 4];
output = "";
var sum = 0;
for(var i = 0; i < arr.length; i++){
  for(var j = i; j < arr.length; j++){
    output+=arr[j] + " ";
    
  }
  for(var k = 0; k < output.length; k++){
    sum+=+output[k];
  }
  if(sum==7){
    console.log(output);
  }
  output="";
  sum=0;
}

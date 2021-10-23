var mat = [[1,2,3],[6,7,8],[9,10,11]];
var sum = 0;
var i = 0;
for(var j = 0; j < mat.length; j++){
    sum+=mat[i][j];
    i++;
}
console.log(sum);
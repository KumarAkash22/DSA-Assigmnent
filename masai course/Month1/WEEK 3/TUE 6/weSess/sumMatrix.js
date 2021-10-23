var matrix =[[1, 2, 3],
[5, 6, 7],
[7, 8, 9]
];
sum = 0
for(var i = 0; i<matrix.length; i++){
    for(var j = i+1; j<matrix.length; j++){
        sum+=matrix[i]+matrix[j];
        console.log(matrix[j]);
    }

}
//console.log(sum, matrix.length);
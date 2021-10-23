var obj = {};
var obj1 = {}; 
var name = [1,1,2,2,3,4,4,5,5]
var name1 = [5,5,5,4,4,3,3,2,1]
for(var i = 0; i < name.length; i++){
    if(obj[name[i]]===undefined){
        obj[name[i]]=1;
    }else{
        obj[name[i]]++;
    }
}
// for(var i = 0; i < name1.length; i++){
//     if(obj1[name1[i]]===undefined){
//         obj1[name1[i]]=1;
//     }else{
//         obj1[name1[i]]++;
//     }
// }
// console.log(obj[4],obj1);

// var max = 0;
// var ans = "";
// for(key in obj){
//     if(obj[key] > max){
//         max = obj[key];
//         ans = obj[key];   
//     } 
// } 
// console.log(ans);
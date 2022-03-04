// console.log(this)
"use strick"
function sum (){
    add = 2+2;
    console.log("add Two No.",add);
    console.log(this);

}
sum();

// const name = {
//     firstName : "Akash",
//     lastName : "Kumar",
//     sum : function(){
//             add = 2+2;
//             console.log("add Two No.",add);
//             console.log(this)
//         },
//     address :{
//         city : "Ajmer",
//         HouseNo : "2",
//         getAddress : function(){
//             console.log(this)
//             console.log(this.city)
//         }
//     }
             
// }
// name.sum();
// name.address.getAddress()
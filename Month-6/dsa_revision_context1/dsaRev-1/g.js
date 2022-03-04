// // const arr = [1,2,3];
// //  arr = arr.map(function(a){
// //     return a+10
// //  })
// //  console.log(arr)
 

// //  const myPromise = Promise.resolve('Woah some cool data');

// // (async () => {
// //   try {
// //     console.log(await myPromise);
// //   } catch {
// //     throw new Error(`Oops didn't work`);
// //   } finally {
// //     console.log('Oh finally!');
// //   }
// // })();


// // function getName(){
// //     var status = true
// //     if(status){
// //         const name = 'masai'
// //     }
// //     console.log(name)
// // }
// // getName()


// // const promise1 = Promise.resolve('First')
// // const promise2 = Promise.resolve('Second')
// // const promise3 = Promise.reject('Third')
// // const promise4 = Promise.resolve('Fourth')

// // const runPromises = async () => {
// //     const res1 = await Promise.all([promise1, promise2])
// //     const res2  = await Promise.all([promise3, promise4])
// //     return [res1, res2]
// // }

// // runPromises()
// //     .then(res => console.log(res))
// //     .catch(err => console.log(err))


// //closure

// // function outer(){
// //     var a = 7;
// //     function inner(){
// //         console.log(a);
// //     }
// //      inner()
// // }
// // outer();



// (() => {
//     let y;
//     try {
// throw new Error();
// } catch (x) {
// (x = 1), (y = 2);
//      console.log(x);
//     }
//     console.log(x);
//     console.log(y);
//   })();


// const person =  "name";
// const members = person;
// person = null;

// console.log(members);



// function Car() {
//   this.make = 'Lamborghini';
//   return { make: 'Maserati' };
// }

// const myCar = new Car();
// console.log(myCar.make);


// let n = [5,10,40,100]; 
// let d = n.sort()
// console.log(d)

// (() => {
//   let x = (y = 10);
// //console.log(typeof x);

// })();

// console.log(typeof x);
// console.log(typeof y);

// var arr = new Array(5).fill(0).map(function(a,b){
//     return b+1
// })


// var arr[] = [1,2,3,4,5]
// console.log(arr)

// typeof[1,1,1] === typeof{val:1,val:1,val:1}


// printName('shoneil')

// var printName
// function printName(name){
//     console.log('helo',name);
// }
// printName = function(name){
//     console.log('hey',name)
// }


// const a;
// console.log(a)  //syntaxError

// console.log(a);
// a = 'aka';
// var a  ///undefine

// console.log(a);
//  a = 'aka';  //ReferenceError

// const arr = 'ac'
// var name = 'arr'
// arr = 'ab'
// name = 'cd'
// console.log(name)


// printName("ak")
// var printName = function(name){
//     console.log('hello',name)
// }


// let fn = 'masai'
// let ln = 'school'
// const per = {fn,ln};
// console.log(per)

// function getName(){
//     name = 'al'
// }
// getName();
// console.log(name)

// const sum = (x,y) =>{
//     x= x || 5
//     y = y || 10
//     return x+y
// }
// console.log(sum(0,10));

//typeof function() {}

// var arr1 = arr2;
// console.log(arr1);
// var arr2 = [1,2,3];
// arr2.push(4);
// console.log(arr1) 


var arr = [1,2,3]
arr[0]=7
console.log(arr);
 

var str = "masai"
str[0]="M";
console.log(str)
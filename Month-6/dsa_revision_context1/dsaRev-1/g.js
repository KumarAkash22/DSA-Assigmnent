// const arr = [1,2,3];
//  arr = arr.map(function(a){
//     return a+10
//  })
//  console.log(arr)
 

//  const myPromise = Promise.resolve('Woah some cool data');

// (async () => {
//   try {
//     console.log(await myPromise);
//   } catch {
//     throw new Error(`Oops didn't work`);
//   } finally {
//     console.log('Oh finally!');
//   }
// })();


// function getName(){
//     var status = true
//     if(status){
//         const name = 'masai'
//     }
//     console.log(name)
// }
// getName()


// const promise1 = Promise.resolve('First')
// const promise2 = Promise.resolve('Second')
// const promise3 = Promise.reject('Third')
// const promise4 = Promise.resolve('Fourth')

// const runPromises = async () => {
//     const res1 = await Promise.all([promise1, promise2])
//     const res2  = await Promise.all([promise3, promise4])
//     return [res1, res2]
// }

// runPromises()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))


//closure

// function outer(){
//     var a = 7;
//     function inner(){
//         console.log(a);
//     }
//      inner()
// }
// outer();



(() => {
    let y;
    try {
throw new Error();
} catch (x) {
(x = 1), (y = 2);
     console.log(x);
    }
    console.log(x);
    console.log(y);
  })();
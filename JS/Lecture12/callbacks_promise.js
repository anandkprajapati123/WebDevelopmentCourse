function sum(a,b){
    console.log(a+b);
}
function claculator(a,b,sumCallback){
    sumCallback(a,b);
}
claculator(2,3,sum);

//  const getPromise=()=>{
//    return new Promise((resolve, reject) => {
//      console.log("I am a promise");
//      resolve("success");
//      reject("some error occured!");
//    });
//  }

// jab fulfill hoga tabhi chalega

//  let promise=getPromise();
//  promise.then((res)=>{
//   console.log("promise fulfilled",res)
//  })

//  jab error aayega tabhi chalega

// promise.catch((err)=>{
  // console.log("rejected...",err)
// })



// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//       if(getNextData){
//         getNextData();
//       } 
//       },5000);
//   });
// }

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }

// Callback Hell

// console.log("getting data1...");
// getData(1,()=>{
//     console.log("getting data2...");
//     getData(2,()=>{
//         console.log("getting data3...");
//         getData(3,()=>{
//             console.log("getting data4...");
//             getData(4,()=>{
//               console.log("getting data5...");
//               getData(5);
//             });
//         });
//     });
// });




// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//       },2000);
//   });
// }

// async await

// async function getAllData() {
//   console.log("getting data1...");
//   await getData(1);
//   console.log("getting data2...");
//   await getData(2);
//   console.log("getting data3...");
//   await getData(3);
// }

// IIFE(Immediately invoked function expression) method
// (async function () {
//   console.log("getting data1...");
//   await getData(1);
//   console.log("getting data2...");
//   await getData(2);
//   console.log("getting data3...");
//   await getData(3);
// })();




// callback hell using promise chain

// getData(1).then((res)=>{
//   console.log(res);
//   getData(2).then((res)=>{
//     console.log(res);
//     getData(3).then((res)=>{
//       console.log(res);
//       getData(4).then((res)=>{
//         console.log(res);
//       })
//     });
//   });
// });

// OR We write promise chain method using another way

// getData(1).then((res)=>{
//   return getData(2);
// }).then((res)=>{
//   return getData(3);
// }).then((res)=>{
//   console.log(res);
// });




// pomise chain

// function asyncFun1(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("data1...");
//       resolve("success");
//     },3000);
//   });
// }

// function asyncFun2(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("data2...");
//       resolve("success");
//     },3000);
//   });
// }

// console.log("fetching data1...")
// asyncFun1().then((res)=>{
//   console.log(res);
//   console.log("fetching data2...");
//   asyncFun2().then((res)=>{
//     console.log(res);
//   });
// });




// Async await

// function api(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("Weather data");
//       resolve(200);
//     },2000);
//   });
// }

// async function getWeatherData() {
//   await api(); // 1st call
//   await api(); // 2nd call
// }

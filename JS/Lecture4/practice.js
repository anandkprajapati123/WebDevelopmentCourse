// Q.1
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let val of marks){
//     console.log(val);
//     sum+=val;
// }
// let avg=sum/marks.length;
// console.log("sum =",sum);
// console.log(`average marks of student = ${avg}`);

// Q.2

// using for-of loop
// let array=[250,645,300,900,50];
// let i=0;
// // console.log("value after offer")
// for(let val of array){
//     // console.log(val);
//     // console.log(`value at index ${i} =${val}`);
//     let offer=val/10;
//     array[i]=array[i]-offer;
//     console.log(`value after offer = ${array[i]}`);
//     i++;
// }

// using for loop
// for(let i=0;i<array.length;i++){
//     let offer=array[i]/10;
//     array[i]-=offer;
// }
// console.log(array);

// Q.3
// let arr=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// arr.pop();
// arr.shift();
// arr.splice(2,1,"ola");
// arr.push("Amazon");
// arr.unshift("Amazon");
// console.log(arr);
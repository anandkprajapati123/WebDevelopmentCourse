// REST PARAMETER
// It is used to collect all the remaining arguments into an array

// function add(a,b,...params){
//     console.log(a);
//     console.log(b);
//     console.log(a+b);
//     console.log(params.length);
//     console.log(params);
//     let sum=0;
    // for(let i=0;i<params.length;i++){
    //     sum=sum+params[i];
    // }
    // console.log(sum);

    // for(i in params){
    //     sum+=params[i];
    // }
    // console.log(sum);

//     for(let i of params){
//         sum+=i;
//     }
//     console.log(sum);
//     console.log(`The sum of the rest parameters is ${sum}`);
//     console.log(Math.max(...params));
//     console.log(Math.min(...params));
// }
// add(1,2,3,4,5,6,7,8,9,10);

// SPREAD OPERATOR/PARAMETER
// It is used to expand an array into individual elements
// It is used to combine two arrays

// let numbers=[1,2,3,4,5,6,7,8,9,10];
// console.log(...numbers);

let p1={
    name:"Anand",
    age:21,
    city:"New Delhi",
    country:"India",
};
// copying obj from p1 to p2
let p2={...p1};
console.log(p2);

// merging p2 into p3
p3={
    mob:9277668,
    pincode:110001,
};
let updatedP1={...p1,...p3};
console.log(updatedP1);
console.log(p1.name);
console.log(p1.age);
console.log(p1.city);
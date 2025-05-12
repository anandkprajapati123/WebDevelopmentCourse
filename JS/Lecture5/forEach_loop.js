let arr=[1,2,3,4,5];
let cities=["Banaras","Delhi","Mumbai"]
// arr.forEach(function printvalue(val){ //each val at each index
//     console.log(val);
// });
arr.forEach((val)=>{
    console.log(val)
});
cities.forEach((val,i,arr)=>{
    console.log(val.toUpperCase(),i,arr);
});
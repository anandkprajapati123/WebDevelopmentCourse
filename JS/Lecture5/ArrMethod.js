// Map Method
let arr=[2,3,4,5,6];
// Using map to iterate over the array
arr.map((val)=>{
    console.log(val);
});
// OR
let newArr=arr.map((val)=>{
    return val;
});
console.log(newArr);

// Filter Method
let arr1=[2,3,4,5,6];
// Using filter to get even numbers from the array
let even=arr1.filter((val)=>{
    return val%2==0;
});
console.log(even);

// Reduce Method
let arr2=[1,2,3,4,6,5];
// Using reduce to get the sum of the array elements
let sum=arr2.reduce((res,curr)=>{
    return res+curr;
    // return res < curr ? res : curr; // To get the largest value
});
console.log(sum);

// Question.1:
let marks=[97,66,65,99,98,44];
let toppers=marks.filter((val)=>{
    return val>90;
});
console.log(toppers);

// Question.2:
let n=prompt("Enter n : ");
let arr3=[];
for(let i=1;i<=n;i++){
    arr3[i-1]=i;
}
console.log(arr3)
let sum1=arr3.reduce((res,curr)=>{
    return res+curr;
    // return res*curr;
});
console.log("Sum =",sum1);
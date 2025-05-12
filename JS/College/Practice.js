// Q.1 Count Vowels
// function countVowels(str) {
//     let count=0;
//     for(const char of str){
//         console.log(char);
//         if(char=='a'|| char=='A'|| char=='e'|| char=='E'|| char=='i'||char=='I'||  char=='o'||char=='O'||  char=='u'||char=='U'){
//             count++;
//         }
//     }
//     console.log("Count=",count);
// }
// countVowels("JavaScript");

// Q.2 Array amx,min,avg
// function arrayMaxMinAvg(arr) {
//     let max=0;
//     let min=1000;
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//         if(arr[i]<min){
//             min=arr[i];
//         }
//         sum+=arr[i];
//     }
//     let avg=sum/arr.length;
//     console.log("Max:",max,"Min:",min,"Avg:",avg);
// }
// arrayMaxMinAvg([20,12,30,34,25,67,45,43]);

// Q.3 callback function

function nameagecitycourse(callback){
    const person = {
      name: 'Alice',
      age: 30,
      city: 'USA',
      course: 'Computer Engineering'
    };
    callback(person);
  }
  
  nameagecitycourse(function(person) {
    console.log("Name:", person.name);
    console.log("Age:", person.age);
    console.log("City:", person.city);
    console.log("Course:", person.course);
  });
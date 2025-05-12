const url = "https://api.thecatapi.com/v1/images/search";
const option={}
const pr = fetch(url,option);
console.log(pr);

let successcB = (res)=>{
    console.log("Data fetched succesfully",res);
}
let errorcB = (res)=>{
    console.log("Data failed",res);
}
pr.then(successcB ).catch(errorcB);

const result=()=>{
    console.log("Data success",data);
}
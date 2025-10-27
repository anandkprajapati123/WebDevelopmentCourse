const URL="https://api.thecatapi.com/v1/images/search?limit=10";
const para=document.querySelector("#para");
const btn=document.querySelector("#btn");

const getFacts=async ()=>{
    let response=await fetch(URL);
    console.log(response);
    let data=await response.json();
    // console.log(data[0].text);
    para.innerText=data[1].message;
};

btn.addEventListener("click",getFacts);


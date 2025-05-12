// let btn1=document.querySelector("#btn1");
// btn1.onclick=(e)=>{
    // console.log("btn1 was clicked!");
    // let a=22;
    // a++;
    // console.log(a);
    // console.log(e);
// }

// btn1.onclick=(event)=>{
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX, event.clientY);
// }

btn1.addEventListener("click",(event)=>{
    console.log("btn1 was clicked");
    // console.log(event);
    // console.log(event.type);
    // console.log(event.target);
    // console.log(event.clientX,event.clientY);
});

btn1.addEventListener("click",(event)=>{
    console.log("button was clicked-handeler1!");
});

btn1.addEventListener("click",(event)=>{
    console.log("button was clicked-handeler2!");
});

const handler3=()=>{
    console.log("button was clocked-handeler3!");
};
// btn1.addEventListener("click",handler3);

btn1.addEventListener("click",(event)=>{
    console.log("button was clicked-handeler4!");
});

btn1.removeEventListener("click",handler3);

let div=document.querySelector("div");
div.onmouseover=()=>{
    console.log("you are inside div");
}

// div.onmouseover=(event)=>{
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX, event.clientY);
// }
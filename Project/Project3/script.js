<<<<<<< HEAD
function valid(){
    let user =document.getElementsByClassName("userInput").value;
    let password=document.getElementsByClassName("userPassword").value;
    let text=/^[a-z,A-Z]+$/;
    let pass=/[@.#$!%^&*.?]/;
    if((!user.match(text)) || user.length<6 || user==""){
        alert("Please Enter Only Characters, Length of 6");
    }
    else if((!password.match(pass))|| password.length<6 || password==""){
        alert("Pleaase Enter a valid password");
    }
    else{
        alert("You Entered Valid User and Password");
    }
}
  
let heading=document.createElement("header");
heading.innerText="Hi, I am Chef Master";
heading.style.fontSize="50px";
document.write(heading);

let para=document.querySelector("h1");
// para.append(heading);
para.prepend(heading);
// para.before(heading);
=======
function valid(){
    let user =document.getElementsByClassName("userInput").value;
    let password=document.getElementsByClassName("userPassword").value;
    let text=/^[a-z,A-Z]+$/;
    let pass=/[@.#$!%^&*.?]/;
    if((!user.match(text)) || user.length<6 || user==""){
        alert("Please Enter Only Characters, Length of 6");
    }
    else if((!password.match(pass))|| password.length<6 || password==""){
        alert("Pleaase Enter a valid password");
    }
    else{
        alert("You Entered Valid User and Password");
    }
}
  
let heading=document.createElement("header");
heading.innerText="Hi, I am Chef Master";
heading.style.fontSize="50px";
document.write(heading);

let para=document.querySelector("h1");
// para.append(heading);
para.prepend(heading);
// para.before(heading);
>>>>>>> 51a78a7f71602c9a2b5e6e6707ddc28dcea13fda
// para.after(heading);
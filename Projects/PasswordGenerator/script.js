let inputSlider = document.querySelector("#inputSlider");
let sliderValue = document.querySelector("#sliderValue");
let passBox = document.querySelector("#passBox");
let uppercase = document.querySelector("#uppercase");
let lowercase = document.querySelector("#lowercase");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");
let generateBtn = document.querySelector("#generateBtn");
let copyIcon = document.querySelector("#copyIcon");

// showing the slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input",()=>{
  sliderValue.textContent = inputSlider.value;
});

generateBtn.addEventListener("click",()=>{
  passBox.value = generatePassword();
});

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let numberChars = "0123456789";
let symbolChars = "!@#$%^&*()_+";

// Function to generate Password
function generatePassword(){
    let genPassword = "";
    let allChars = "";

    allChars  += lowercase.checked ? lowerChars : "";
    allChars  += uppercase.checked ? upperChars : "";
    allChars  += numbers.checked ? numberChars : "";
    allChars  += symbols.checked ? symbolChars : "";

    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }
    
    let i = 1;
    while(i<=inputSlider.value){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    return genPassword;
}

copyIcon.addEventListener("click",()=>{
  if(passBox.value != "" || passBox.length >= 1){
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText = "check";
    copyIcon.title = "Password Copied";

    setTimeout(()=>{
      copyIcon.innerText = "content_copy";
      copyIcon.title = "";
    },2000);
  }
});
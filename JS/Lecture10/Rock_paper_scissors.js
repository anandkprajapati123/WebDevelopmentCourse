let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScoreDisplay=document.querySelector("#user-score");
const compScoreDisplay=document.querySelector("#Computer-score");

const gencompchoice=()=>{
    let options=["rock","paper","scissors"];
    const randIndx=Math.floor(Math.random()*3);
    return options[randIndx];
    if(options.innerText==10){
        msg.innerText="You Win";
    }

}

const drawGame=()=>{
    msg.innerText="It's a draw.Play again!";
    msg.style.backgroundColor="yellow";
    msg.style.color="black";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScoreDisplay.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScoreDisplay.innerText=compScore;
        msg.innerText=`You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame=(userChoice)=>{
    // Generate computer choice
    const compChoice=gencompchoice();

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userwin=true;
        if(userChoice==="rock"){
            userwin=compChoice==="paper"? false:true;
        } else if(userChoice==="paper"){
            userwin=compChoice==="scissors"? false:true;
        } else if(userChoice==="scissors"){
            userwin=compChoice==="rock"? false:true;
        }
        showWinner(userwin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.id;
        playgame(userChoice);
    });
});
// let paper=document.querySelector("#paper");
// let rock=document.querySelector("#rock");
// let scissor=document.querySelector("#scissor");
let userPoints=document.querySelector("#user-score");
let compPoints=document.querySelector("#comp-score");
let choices=document.querySelectorAll(".choice");
let message=document.querySelector("#msg");
let userScore=0;
let compScore=0;
let drawGame=()=>{
    message.innerText="Game draw! Please try again";
    message.style.backgroundColor="black"
}
let getcompChoice=()=>{
    const options=["rock","paper","scissor"];
    let indx=Math.floor(Math.random()*3);
    return options[indx];
}
let showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userPoints.innerText=userScore;
        message.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor="green";
    }
    else{
        compScore++;
        compPoints.innerText=compScore;
        message.innerText=`You Lost! ${compChoice} beats your ${userChoice}`;
        message.style.backgroundColor="red";
    }
}
let calWinner=(userChoice)=>{
    let compChoice=getcompChoice();
    if(compChoice===userChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="paper"){
            userWin=compChoice==="rock"?true:false;
        }
        else if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else{
            userWin=compChoice==="paper"?true:false;
        }
        if(userWin){
            message.innerText="You Win!";
        }
        else{
            message.innerText="You loose!";
        }
        showWinner(userWin,userChoice,compChoice);
        
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("clicked");
        calWinner(userChoice);
    });
});
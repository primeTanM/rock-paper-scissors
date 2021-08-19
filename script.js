let picks = document.querySelectorAll("#picks");
let stepOne = document.querySelector('.game-container-step-1');
let stepTwo = document.querySelector('.game-container-step-2');
let result = document.querySelector('.result-text');
let score = document.querySelector('.score-number');
let turnBorder = document.querySelector('.turn-border');
let yourPickBorder = document.getElementById("your-pick-border");
let yourPickTurn = document.getElementById("your-pick-turn");
let housePickBorder = document.getElementById("house-pick-border");
let housePickTurn = document.getElementById("house-pick-turn");
let playAgain = document.querySelector('.play-again');
let resetBtn = document.getElementById('reset-btn');

let yourPick;
let randomNumber;
let housePick;
let count = 0;


picks.forEach(btn => {
    btn.addEventListener("click", () => {
        let first = setInterval(() => {
            turnBorder.style.display="none";
            housePickBorder.classList.remove("turn");
            housePickBorder.classList.add("blank-turn");
            
            
        },3000);

        clearInterval(first);

        stepOne.style.display="none";
        stepTwo.style.display="grid";
        yourPick = (btn.className);
        console.log(yourPick);
        yourPickBorder.classList.add(yourPick + '-border');
        yourPickTurn.classList.add(yourPick.split('')[0]);
        decideWinnner();
        housePickBorder.classList.add(housePick + '-border');
        housePickTurn.classList.add(housePick.split('')[0]);
        updateScore();
    })
})

playAgain.addEventListener('click', restart);

function restart(){
    stepOne.style.display="grid";
    stepTwo.style.display="none";
    yourPickBorder.classList.remove(yourPick + '-border');
    yourPickTurn.classList.remove(yourPick.split('')[0]);
    housePickBorder.classList.remove(housePick + '-border');
    housePickTurn.classList.remove(housePick.split('')[0]);
    yourPick = "";
    housePick = "";
}


function decideWinnner(){
    randomNumber = Math.floor(Math.random() * 3);
    housePick = picks[randomNumber].className;
    console.log(housePick);

    if (yourPick == housePick){
        result.innerText = "DRAW";
    }

    else if (yourPick == "rock"){
        if (housePick == "scissor"){
            result.innerText = "YOU WIN";
        }
        else {
            result.innerText = "YOU LOSE";
        }
    }

    else if (yourPick == "paper") {
        if (housePick == "rock"){
            result.innerText = "YOU WIN";
        }
        else {
            result.innerText = "YOU LOSE";
        }
    }
    else {
        if (housePick == "paper"){
            result.innerText = "YOU WIN";
        }
        else {
            result.innerText = "YOU LOSE";
        }
    }
    

    console.log(result.innerText);
}

function updateScore(){
    
    if (result.innerText == "YOU WIN"){
        count += 1;
    }

    else if (result.innerText == "YOU LOSE"){
        count -= 1;
    }

    score.innerText = count;

}


resetBtn.addEventListener('click', () => {
    restart();
    score.innerText = 0;
})
//rules-modal

var modal = document.getElementById('modal');
var rulesBtn = document.getElementById('rules-btn');
var closeBtn = document.querySelector('.close-btn');

rulesBtn.addEventListener('click', () => {
    modal.style.display = "block";
})

closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
})


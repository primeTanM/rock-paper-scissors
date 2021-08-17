let picks = document.querySelectorAll("#picks");
let stepOne = document.querySelector('.game-container-step-1');
let stepTwo = document.querySelector('.game-container-step-2');
let result = document.querySelector('.result-text');
let yourPick;
let randomNumber;
let housePick;

picks.forEach(btn => {
    btn.addEventListener("click", () => {
        stepOne.style.display="none";
        stepTwo.style.display="flex";
        yourPick = (btn.className);
        console.log(yourPick);
        decideWinnner();
        
        // stepTwo.style.display="flex";


    })
})

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

}
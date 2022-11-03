const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// declering and initialing scores
var scoreUser = 0;
var scoreComp = 0;

// adding eventListeners to the buttons to starts a round of game
if(rock){
    rock.addEventListener('click', () => round("rock"));
}
if(paper){
    paper.addEventListener('click',() => round("paper"));
}
if(scissors){
    scissors.addEventListener('click',() => round("scissors"));
}

// random choice for computer, returning string
function comp_move() {
    const choices = ["rock", "paper", "scissors"]
    let computer_rand = Math.floor(Math.random() * 3);
    return choices[computer_rand];
}

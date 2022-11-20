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

// round logic of the game
function round(user_input) {

    document.getElementById("winner").innerText = "Select symbol!";
    let comp_choice = comp_move();

    if( user_input === comp_choice) {
        document.getElementById("winner").innerText = "We Have a Tie!";
    }
    else if( user_input === "rock" && comp_choice === "scissors"){
        scoreUser++;
        document.getElementById("winner").innerText = "You score a point!";
        $('#user').html("Player:  " + scoreUser);
    }
    else if( user_input === "rock" && comp_choice === "paper"){
        scoreComp++;
         document.getElementById("winner").innerText = "Computer scores a point!";
         $('#computer').html('Computer:  '+ scoreComp);
    }
    else if( user_input === "paper" && comp_choice === "scissors"){
        scoreComp++;
         document.getElementById("winner").innerText = "Computer scores a point!";
         $('#computer').html('Computer:  '+ scoreComp);
    }
    else if( user_input === "paper" && comp_choice === "rock"){
        scoreUser++;
        document.getElementById("winner").innerText = "You score a point!";
        $('#user').html("Player:  " + scoreUser);
    }
    else if( user_input === "scissors" && comp_choice === "paper"){
        scoreUser++;
        document.getElementById("winner").innerText = "You score a point!";
        $('#user').html("Player:  " + scoreUser);
    }
    else if( user_input === "scissors" && comp_choice === "rock"){
        scoreComp++;
         document.getElementById("winner").innerText = "Computer scores a point!";
         $('#computer').html('Computer:  '+ scoreComp);
    }
    finish(scoreUser,scoreComp);
}

// check if someone has 10 points
function finish(sUser,sComp) {

    if(sComp >= 10 || sUser >= 10) {

        if (sUser >= 10){
            $('#selection').html("<h1>You Win!</h1>");
            $('#selection').css("background", "#09ec7f");
        }
        else {
            $('#selection').html("<h1>The Computer Wins!</h1>");
            $('#selection').css("background", "red");
        }

        $('#again').html("<p class=\"play-again\"><a href=\"index.html\"><strong>Play again?</strong></a></p>");
        $('#selection').css("margin-top", "30px");
    }
}

function getComputerMove() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randChoice = Math.floor(Math.random() * choices.length);
    return choices[randChoice];
}

function checkOutcome(userMove, computerMove) {
    if (userMove == "Rock" && computerMove == "Scissors") {
        let winner = document.createElement('div');
        winner.textContent = "You win!";
        document.body.appendChild(winner);
    }
    else if (userMove == "Paper" && computerMove == "Rock") {
        let winner = document.createElement('div');
        winner.textContent = "You win!";
        document.body.appendChild(winner);
    }
    else if (userMove == "Scissors" && computerMove == "Paper") {
        let winner = document.createElement('div');
        winner.textContent = "You win!";
        document.body.appendChild(winner);
    }
    else if (userMove == computerMove) {
        let winner = document.createElement('div');
        winner.textContent = "Tie!";
        document.body.appendChild(winner);
    }
    else {
        let winner = document.createElement('div');
        winner.textContent = "You lose!";
        document.body.appendChild(winner);
    }
}

const buttons = document.querySelectorAll('.rpsbutton');

buttons.forEach(function(button) {
    button.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});

document.getElementById("rock").addEventListener("click", function() {
    document.body.innerHTML='';
    let resultDiv = document.createElement('div');
    let computerMove = getComputerMove();
    resultDiv.textContent = `You picked Rock! Computer picked ${computerMove}!`;
    document.body.appendChild(resultDiv);
    checkOutcome("Rock", computerMove);
});

document.getElementById("paper").addEventListener("click", function() {
    document.body.innerHTML='';
    let resultDiv = document.createElement('div');
    let computerMove = getComputerMove();
    resultDiv.textContent = `You picked Paper! Computer picked ${computerMove}!`;
    document.body.appendChild(resultDiv);
    checkOutcome("Paper", computerMove);
});

document.getElementById("scissors").addEventListener("click", function() {
    document.body.innerHTML='';
    let resultDiv = document.createElement('div');
    let computerMove = getComputerMove();
    resultDiv.textContent = `You picked Scissors! Computer picked ${computerMove}!`;
    document.body.appendChild(resultDiv);
    checkOutcome("Scissors", computerMove);
});

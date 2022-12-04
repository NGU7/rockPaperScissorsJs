function getComputerChoice() {
    cpuChoices = ['rock', 'paper', 'scissors'];
    cpuMath = Math.floor(Math.random() * 3);
    ans1 = cpuChoices[cpuMath];
    return ans1;
}

const compAns = getComputerChoice();

function playerSelection() {
    plyChoice = prompt('Choice your fighter: rock, paper, or scissors!');
    ans2 = plyChoice.toLowerCase();
    let i = 0;
    while (ans2 != 'rock' && ans2 != 'paper' && ans2 != 'scissors') {
        plyChoice = prompt('pick a damn option: rock, paper, or scissors!!!');
        i++;
        if (i > 2) {
            return ("please try again and refresh the page");
        } else if ((ans2 = "rock") || (ans2 = 'paper') || (ans2 = 'scissors')) {
            break;
        }
    };
    return ans2;
}

const plyAns = playerSelection();

function playRound(plyAns, compAns) {
    if (compAns === plyAns) {
        return "Tie Game";
    } else if ((plyAns === "rock") && (compAns === "scissors")) {
        return "Win";
    } else if ((plyAns === "rock") && (compAns === "paper")) {
        return "Loss";
    } else if ((plyAns === 'paper') && (compAns === 'rock')) {
        return "Win";
    } else if ((plyAns === 'paper') && (compAns === 'scissors') ) {
        return "Loss";
    } else if ((plyAns === 'scissors') && (compAns === 'paper') ) {
        return "Win";
    } else if ((plyAns === 'scissors') && (compAns === 'rock') ) {
        return 'Loss';
    } else {
        return "how did you screw this up ?";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let d = 0;
        let Loss = 0;
        playRound();
        if (playRound() = 'Win') {
            d++;
        }
    }
}

console.log(compAns);
console.log(plyAns);
console.log(playRound(plyAns, compAns));



/*
function RPS() {
    if (compAns === plyAns) {
        return "You both chose the same thing ! Tie game !";
    } else if ((plyAns = "rock") && (compAns = "scissors")) {
        return "You Win ! Rock smashes the scissors !";
    } else if ((plyAns = "rock") && (compAns = "paper")) {
        return "You Lose ! Rock got eaten by Paper ! Wa Wa Wa";

    } else if ((plyAns = "paper") && (compAns = "rock")) {
        return "You Win ! Paper eats Rock !";
    } else if ((plyAns = "paper") && (compAns = "scissors")) {
        return "You Lose ! Paper got diced scissors ! Wa Wa Wa"
    } else if ((plyAns = "scissors") && (compAns = "paper")) {
        return "You Win ! Scissors diced the paper !"
    } else if ((plyAns = "scissors") && (compAns = "rock")) {
        return "You Lose ! Scissors gets smashed by rock ! Wa Wa Wa"
    } else {
        return "How did you screw this up "
    }
}
console.log(RPS()) */
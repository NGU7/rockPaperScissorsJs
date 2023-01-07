function getComputerChoice() {
    cpuChoices = ['rock', 'paper', 'scissors'];
    cpuMath = Math.floor(Math.random() * 3);
    ans1 = cpuChoices[cpuMath];
    return ans1;
}

const rock = document.querySelector('#rock');
const rocker = rock.addEventListener('click', () => {
    game('rock');
    return;
});

const paper = document.querySelector('#paper');
const pap = paper.addEventListener('click', () => {
    game('paper');
    return;
});

const scissors = document.querySelector('#scissors');
const sci = scissors.addEventListener('click', () => {
    game('scissors');
    return;
});

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

function game(les) {
    let d = 0;
    let l = 0;
        let compAns = getComputerChoice();
        let plyAns = les;
        if ((playRound(plyAns, compAns)) === 'Win') {
            d++;
            alert("You Win! Play again");
            if (d > 2) {
                return "You won the game !"
            }
        } else if (playRound(plyAns, compAns) === "Loss") {
            l++;
            alert("You Lose! Try again");
            if (l > 2) {
                return "You lose the game ! Wa Wa Wa."
            }
        } else if (playRound(plyAns, compAns) === "Tie Game") {
            alert("Tie Round");
            
        }
        else {
            alert("something went wrong!");
        }
    };
//}






  












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
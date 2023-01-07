function getComputerChoice() {
    cpuChoices = ['rock', 'paper', 'scissors'];
    cpuMath = Math.floor(Math.random() * 3);
    ans1 = cpuChoices[cpuMath];
    return ans1;
}


function playerSelection() {
    plyChoice = prompt('Choice your fighter: rock, paper, or scissors!');
    ans2 = plyChoice.toLowerCase();
    let i = 0;
    while (ans2 != 'rock' && ans2 != 'paper' && ans2 != 'scissors') {
        if (i > 2) {
            return "q";
        }

        i++;
        plyChoice = prompt('pick a damn option: rock, paper, or scissors!!!');
        ans2 = plyChoice.toLowerCase();
         if ((ans2 === "rock") || (ans2 === 'paper') || (ans2 === 'scissors')) {
            break;
        }
    };
    return ans2;
}

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
    let d = 0;
    let l = 0;
    // if ((playerSelection()) === "q") {
    //     alert("Too many wrongs, refresh the page!");
    //     return;
    // }
    for (let i = 0; i < 5; i++) {
        let compAns = getComputerChoice();
        // let plyAns = playerSelection();
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
            i--;
        }
        else {
            alert("something went wrong!");
            break;
        }
    }
}

const rob = document.querySelector('#Rock');
rob.addEventListener("click", () => {
    plyAns = "rock";
    console.log(game())
});

console.log(rob);


  
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
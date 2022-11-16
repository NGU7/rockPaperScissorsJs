function getComputerChoice() {
    cpuChoices = ['rock', 'paper', 'scissors'];
    cpuMath = Math.floor(Math.random() * 3);
    ans = cpuChoices[cpuMath];
    return ans;
}
console.log(getComputerChoice())

function playerSelection() {
    plyChoice = prompt('Choice your fighter: rock, paper, or scissors!');
    ans = plyChoice.toLowerCase();
    let i = 0;
    while (ans != 'rock' && ans != 'paper' && ans != 'scissors') {
        plyChoice = prompt('pick a damn option: rock, paper, or scissors!!!');
        i++;
        if (i > 2) {
            return ("please try again and refresh the page");
        }
    };
    return ans;
}
console.log(playerSelection())


function RPS() {
    switch (game) {
    }
}


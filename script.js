function getComputerChoice() {
    cpuChoices = ['Rock', 'Paper', 'Scissors'];
    cpuMath = Math.floor(Math.random() * 3);
    ans = cpuChoices[cpuMath];
    return ans;
}

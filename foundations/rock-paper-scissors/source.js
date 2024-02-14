const resSpan = document.getElementById('result');

var choices = ["rock", "paper", "scissors"]

let userScore = 0
let compScore = 0

function updateScore(matchResult)
{
    if (matchResult > 0)
    {
        userScore = userScore+matchResult
    }
    else {
        compScore = compScore+ -matchResult
    }

    return `User: ${userScore} - Computer: ${compScore}`;
}

function round(userChoice)
{
    let computerChoice = getComputerChoice();

    let userIndex = choices.indexOf(userChoice);
    let computerIndex = choices.indexOf(computerChoice);

    let printStr = '';
    printStr += "User: " +  userChoice.toUpperCase();

    printStr += "\nComputer: " + computerChoice.toUpperCase();

    console.log(printStr);

    if (userIndex === computerIndex)
    {
        printStr += "\nDRAW!";
        return { val: 0, printStr: printStr }
    }

    if (userIndex === computerIndex + 1 || userIndex === 0 && computerIndex === 2)
    {
        printStr += "\nWIN!";
        return { val: 1, printStr: printStr }
    }

    printStr += "\nLOSE!"
    return { val: -1, printStr: printStr }
}

function getComputerChoice()
{
    let randomInt = Math.floor(Math.random() * 3)
    return choices[randomInt]
}

function processEvent(choice)
{
    const {val, printStr} = round(choice)
    let updateString = updateScore(val);
    console.log(updateString);

    resSpan.textContent = printStr + '\n' + updateString;
}

const rockBtn = document.getElementById('rock1');
rockBtn.addEventListener('click', () => processEvent('rock'));

const paperBtn = document.getElementById('paper');
paperBtn.addEventListener('click', () => processEvent('paper'));

const scissorsBtn = document.getElementById('scissors');
scissorsBtn.addEventListener('click', () => processEvent('scissors'));



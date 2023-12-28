console.log(23 + 97)

function add7(input)
{
    return input + 7
}

function capitalize(input)
{
    return input.substring(0,1).toUpperCase() + input.slice(1)
}


function lastLetter(input)
{
    return input.slice(-1)
}


function fizzbuzz(input)
{
    for (let i = 0; i < input; i++) {
        let isDiv3 = i%3 ==0
        let isDiv5 = i%5==0
        if (isDiv3 && isDiv5)
        {
            console.log("fizzbuzz")
        }
        else if (isDiv3)
        {
            console.log("fizz")
        }
        else if (isDiv5)
        {
            console.log("buzz")
        }
        else
        {
            console.log(i);
        }
    }
}

var choices = ["rock", "paper", "scissors"]
function rockPaperScissors()
{
    let userScore = 0
    let compScore = 0
    for (let i=0; i< 5;i++)
    {
        let result = singlematch()
        if (result > 0)
        {
            userScore = userScore+result
        }
        else {
            compScore = compScore+ -result
        }

        console.log(`score user: ${userScore} - computer ${compScore}`)

        if (userScore > 2)
        {
            console.log("you win")
        }
        if (compScore > 2)
        {
            console.log("computer wins")
        }
    }

    if(userScore>2)
    {
        console.log("you win match")
    } else {
        console.log("computer wins match")
    }
}

function singlematch()
{
    do {
        result = round()
    } while(result == 0);

    return result
}

function round()
{
    let userChoice = prompt("enter choice").toLocaleLowerCase()

    if (!choices.some(c => c === userChoice))
    {
        throw error("Invalid input")
    }

    let computerChoice = getComputerChoice()

    let userIndex = choices.indexOf(userChoice)
    let computerIndex = choices.indexOf(computerChoice)

    console.log("computer choice " + computerChoice)
    console.log("user choice " + userChoice)

    if (userIndex === computerIndex)
    {
        console.log("retry")
        return 0
    }

    if (userIndex === computerIndex + 1 || userIndex === 0 && computerIndex === 2)
    {
        console.log("win")
        return 1
    }

    console.log("lose")
    return -1
}

function getComputerChoice()
{
    let randomInt = Math.floor(Math.random() * 3)
    return choices[randomInt]
}

console.log("here" + add7(22))

console.log(capitalize("capital"))

console.log(lastLetter("lastLetter"))

fizzbuzz(16)

rockPaperScissors()
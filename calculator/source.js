const nums = document.getElementsByClassName('num');
const displ = document.getElementById('display');
const plus = document.getElementById('plus');
const subtract = document.getElementById('subtract');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');
const backspace = document.getElementById('backspace');

let prevOp = ""
let prevNum = ""
let postOpAdded = false

let numArray = Array.from(nums)
numArray.forEach(numCell => {
    numCell.addEventListener('click', () => clickNum(numCell))
});

function clickNum(numVal)
{
    if (displ.innerText == 0 || postOpAdded)
    {
        prevNum = Number(displ.innerText)
        displ.innerText = numVal.innerText 
        postOpAdded = false
    } else {
        displ.innerText = displ.innerText + numVal.innerText 
    }
}

plus.addEventListener('click', plusFn)
subtract.addEventListener('click', subtractFn)
divide.addEventListener('click', divideFn)
multiply.addEventListener('click', multiplyFn)
equal.addEventListener('click', equalFn)
clear.addEventListener('click', clearFn)
backspace.addEventListener('click', backFn)

function applyPreviousOp()
{
    postOpAdded = true

    if (!prevOp || !prevNum)
    {
        return
    }


    let currVal = Number(displ.innerText)
    let retVal = ""
    console.log("curr: " + currVal)
    console.log("prevNum: " + prevNum)

    switch(prevOp)
    {
        case "plus":
            retVal = prevNum + currVal
            break
        case "subtract":
            retVal = prevNum - currVal
            break
        case "divide":
            retVal = prevNum / currVal
            break
        case "multiply":
            retVal = prevNum * currVal
            break
    }

    displ.innerText = retVal
    prevNum = ""
    prevOp = ""
}


function clearFn()
{
    prevNum = ""
    prevOp = ""
    displ.innerText = ""
}

function backFn()
{
    displ.innerText = display.innerText.substring(0, display.innerText.length - 1)
}

function equalFn()
{
    applyPreviousOp()
}

function plusFn()
{
    applyPreviousOp()
    prevOp = "plus"
}

function subtractFn()
{
    applyPreviousOp()
    prevOp = "subtract"
}

function divideFn()
{
    applyPreviousOp()
    prevOp = "divide"
}

function multiplyFn()
{
    applyPreviousOp()
    prevOp = "multiply"
}
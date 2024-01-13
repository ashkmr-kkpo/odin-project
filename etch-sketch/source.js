const grid = document.getElementById('grid');
const inpSlide = document.getElementById('myRange');
const black = document.getElementById('black');
const rainbow = document.getElementById('rainbow');

function setupGrid(numCells)
{
    let sqSize = 450/numCells
    for(let i=0;i<numCells*numCells;i++)
    {
        createNewCell(sqSize);
    }
}

function createNewCell(size)
{
    let cell = document.createElement('div')
    cell.style.width = size + 'px'
    cell.style.height = size + 'px'
    cell.style.backgroundColor = 'white'
    cell.className = 'cell'
    cell.addEventListener('mouseover', () => paintCell(cell))
    grid.appendChild(cell)
}

function clearGrid() {
    while(grid.lastChild)
    {
        grid.removeChild(grid.lastChild)
    }
}

let colorToSet = 'black'
let rainbowMode = false
const rainbowColors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']
function paintCell(cell)
{
    if (rainbowMode)
    {
        let randomInt = Math.floor(Math.random() * 7)
        cell.style.backgroundColor = rainbowColors[randomInt]
    } else {
        cell.style.backgroundColor = colorToSet
    }
}

function sliderListener()
{
    clearGrid()
    setupGrid(inpSlide.value)
}

function blackSet()
{
    colorToSet = 'black'
}

function rainbowSet() {
    rainbowMode = true
}

inpSlide.addEventListener('mouseup', sliderListener)
black.addEventListener('click', blackSet)
rainbow.addEventListener('click', rainbowSet)

setupGrid(15)
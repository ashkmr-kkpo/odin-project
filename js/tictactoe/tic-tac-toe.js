let tics = document.getElementsByClassName("tic");
let ticsArr = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
  ];
console.log(ticsArr);

for (let i=0;i< tics.length;i++)
{
    tics[i].id = i;
    tics[i].addEventListener('click', () => setTicToe(tics[i]))
}

let xTurn = true;
let won = false;

function setTicToe(tic) {
    if (tic.textContent)
    {
        return;
    }

    if (won)
    {
        return;
    }

    ticsArr[Math.floor(tic.id/3)][tic.id%3] = xTurn ? 1 : 0;
    won = checkLine(Math.floor(tic.id/3), tic.id%3, xTurn ? 1 : 0)

    if (won)
    {
        document.getElementById("result").textContent = (xTurn ? "X" : "O") + " WINS";
        document.getElementById("result").style.color = "green";
    }
    tic.textContent = xTurn ? "X" : "O";
    xTurn = !xTurn;
}

function checkLine(x, y, val)
{
    let xEndBound = x+1 <= 2;
    let yEndBound = y+1 <= 2;
    let xStartBound = x-1 >= 0;
    let yStartBound = y-1 >= 0;

    if (xEndBound || xStartBound)
    {
        let allTrue = true
        for(let i=0;i<3;i++)
        {
            console.log("A", i, y, ticsArr[i][y]);
            allTrue = allTrue & ticsArr[i][y] === val;
        }

        if(allTrue)
        {
            return allTrue
        }
    }

    if (yEndBound || yStartBound)
    {
        let allTrue = true

        for(let i=0;i<3;i++)
        {
            console.log("B" + ticsArr[x][i])
            allTrue = allTrue & ticsArr[x][i] === val;
        }

        if(allTrue)
        {
            return allTrue
        }
    }

    if (xEndBound && yEndBound || xStartBound && yStartBound)
    {

        let allTrue = true
        for(let i=0;i<3;i++)
        {
            console.log("C" + ticsArr[i][i])
            allTrue = allTrue & ticsArr[i][i] === val;
        }

        if(allTrue)
        {
            return allTrue
        }
    }

    if (xEndBound && yStartBound || xStartBound && yEndBound)
    {
        let allTrue = true

        for(let i=0;i<3;i++)
        {
            console.log("D" + ticsArr[i][2-i])
            allTrue = allTrue & ticsArr[i][2-i] === val;
        }

        if(allTrue)
        {
            return allTrue
        }
    }

    return false;
}
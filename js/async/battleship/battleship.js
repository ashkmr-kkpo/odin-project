class ShipFactory {
  createShip(size) {}
}

class Ship {
  hit() {}

  isSunk() {}
}

class Gameboard {
  #cells = 10;

  Gameboard() {}
  receiveHit(cell) {
    let x = cell.getAttribute("x");
    let y = cell.getAttribute("y");
    let player = cell.getAttribute("player");
  }
  setupGrids() {
    for (let i = 0; i < 2; i++) {
      this.setupGrid(i + 1);
    }
  }

  setupGrid(index) {
    let play = document.getElementById("play");
    let gridNum = document.createElement("div");
    gridNum.classList.add("grid");
    gridNum.classList.add("player" + index);
    for (let i = 0; i < this.#cells; i++) {
      for (let j = 0; j < this.#cells; j++) {
        gridNum.appendChild(this.#createNewCell(20, i, j));
      }
    }
    play.appendChild(gridNum);
  }

  #createNewCell(playerNum, i, j) {
    let cell = document.createElement("div");
    cell.style.backgroundColor = "red";
    cell.setAttribute("x", i);
    cell.setAttribute("y", j);
    cell.setAttribute("player", playerNum);
    cell.classList.add("cell");
    cell.addEventListener("click", () => this.receiveHit(cell));
    return cell;
  }
}

class Player {}

let board = new Gameboard();
board.setupGrids();

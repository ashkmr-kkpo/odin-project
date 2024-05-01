import { Ship } from "./ship.js";

let playerTurn = 1;
class Gameboard {
  #cellCount = 10;

  gameboardArr = [[]];
  ships = [];
  constructor() {
    for (let i = 0; i < this.#cellCount; i++) {
      this.gameboardArr[i] = new Array(this.#cellCount).fill(0);
    }
  }

  receiveHit(cell) {
    let x = cell.getAttribute("x");
    let y = cell.getAttribute("y");
    let player = cell.getAttribute("player");
    if (playerTurn % 2 == player - 1) {
      return;
    }
    for (let ship of this.ships) {
      if (ship.hit(x, y)) {
        cell.style.backgroundColor = "purple";
        return;
      }
    }
    cell.style.backgroundColor = "blue";
    playerTurn++;
  }

  placeNewRandomShip(size) {
    function plusx(x, y, add) {
      return [x + add, y];
    }

    function plusy(x, y, add) {
      return [x, y + add];
    }

    function minusx(x, y, subtract) {
      return [x - subtract, y];
    }

    function minusY(x, y, subtract) {
      return [x, y - subtract];
    }

    let orderOfSearch = [plusx, plusy, minusx, minusY];

    while (true) {
      let randomX = Math.floor(Math.random() * 10);
      let randomY = Math.floor(Math.random() * 10);
      for (let currentOrder = 0; currentOrder < 4; currentOrder++) {
        let valid = true;
        for (let i = 0; i < size; i++) {
          let [tryX, tryY] = orderOfSearch[currentOrder](randomX, randomY, i);
          valid = valid && this.isValid(tryX, tryY);
          if (!valid) {
            break;
          }
        }

        if (valid) {
          let [finalX, finalY] = orderOfSearch[currentOrder](
            randomX,
            randomY,
            size - 1
          );
          return new Ship(randomX, randomY, finalX, finalY, size);
        }
      }
    }
  }

  isValid(x, y) {
    if (0 <= x && x < 10 && 0 <= y && y < 10) {
      return !this.gameboardArr[x][y];
    }

    return false;
  }

  paintShipInGrid(ship) {
    ship.setOrientation();

    for (let i = ship.from; i <= ship.to; i++) {
      if (ship.horizontal) {
        this.gameboardArr[i][ship.srcY] = 1;
      } else {
        this.gameboardArr[ship.srcX][i] = 1;
      }
    }
  }

  placeAllShipsRandom() {
    for (let i = 0; i < 3; i++) {
      let ship = this.placeNewRandomShip(3);
      this.paintShipInGrid(ship);
      this.ships.push(ship);
    }
  }

  setupGrid(index) {
    let play = document.getElementById("play");
    let gridNum = document.createElement("div");
    gridNum.classList.add("grid");
    gridNum.classList.add("player" + index);
    this.placeAllShipsRandom();
    for (let i = 0; i < this.#cellCount; i++) {
      for (let j = 0; j < this.#cellCount; j++) {
        let newCell = this.#createNewCell(index, i, j);
        if (this.gameboardArr[i][j]) {
          newCell.style.backgroundColor = "green";
        }
        gridNum.appendChild(newCell);
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

export { Gameboard };

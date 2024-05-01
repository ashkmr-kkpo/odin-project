class Ship {
  #hp;
  isHorizontal;
  from;
  to;
  constructor(srcX, srcY, destX, destY, size) {
    this.srcX = srcX;
    this.srcY = srcY;
    this.destX = destX;
    this.destY = destY;
    this.#hp = size;
  }
  hit(x, y) {
    for (let i = this.from; i <= this.to; i++) {
      if (this.horizontal) {
        if (x == i && y == this.srcY) {
          this.#hp--;
          return true;
        }
      } else {
        if (x == this.srcX && y == i) {
          this.#hp--;
          return true;
        }
      }
    }
    return false;
  }

  setOrientation() {
    if (this.srcX == this.destX) {
      this.from = Math.min(this.srcY, this.destY);
      this.to = Math.max(this.srcY, this.destY);
    } else {
      this.from = Math.min(this.srcX, this.destX);
      this.to = Math.max(this.srcX, this.destX);
      this.horizontal = true;
    }
  }

  isSunk() {
    return !this.#hp;
  }
}

export { Ship };

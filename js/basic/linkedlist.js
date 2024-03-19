class LinkedList {
  #tail;
  constructor(root) {
    this.size = 1;
    this.root = root;
    this.#tail = root;
  }

  append(value) {
    let newNode = new Node(null, value);
    this.#tail.next = newNode;
    this.#tail = newNode;
    this.size++;
  }

  traverse() {
    let traverse = this.root;
    while (traverse != null) {
      console.log(traverse.getValue());
      traverse = traverse.next;
    }
  }

  pop() {
    let traverse = this.root;
    if (this.root.next === null) {
      this.root = null;
      this.size = 0;
      this.#tail = null;
      return;
    }
    while (traverse != null) {
      if (traverse.next === this.#tail) {
        traverse.next = null;
        this.#tail = traverse;
        break;
      }
      traverse = traverse.next;
    }
    this.size--;
  }
}

class Node {
  #value;
  constructor(next, value) {
    this.next = next;
    this.#value = value;
  }

  getValue() {
    return this.#value;
  }
}

let first = new Node(null, 5);
let list = new LinkedList(first);
list.append(6);
list.pop();
list.traverse();
list.append(7);
list.traverse();
console.log(list.size);

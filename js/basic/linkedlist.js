export class LinkedList {
  #tail;
  constructor(rootValue, rootKey) {
    this.initRoot(rootValue, rootKey);
  }

  append(value, key) {
    if (this.root === null) {
      this.initRoot(value, key);
      return;
    }
    let newNode = new Node(null, value, key);
    this.#tail.next = newNode;
    this.#tail = newNode;
    this.size++;
  }

  traverse() {
    let traverse = this.root;
    while (traverse != null) {
      console.log(traverse.getValue(), traverse.getKey());
      traverse = traverse.next;
    }
  }

  getKeys() {
    let traverse = this.root;
    let keys = [];
    while (traverse != null) {
      keys.push(traverse.getKey());
      traverse = traverse.next;
    }
    return keys;
  }

  getValues() {
    let traverse = this.root;
    let values = [];
    while (traverse != null) {
      values.push(traverse.getValue());
      traverse = traverse.next;
    }
    return values;
  }

  pop() {
    let traverse = this.root;
    if (this.root.next === null) {
      this.clearList();
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

  remove(value) {
    let traverse = this.root;
    let parent = null;
    while (traverse != null) {
      if (traverse.getValue() === value) {
        if (parent === null) {
          this.clearList();
        } else {
          parent.next = traverse.next;
        }

        if (traverse === this.#tail) {
          this.#tail = parent;
        }

        this.size--;
      }
      parent = traverse;
      traverse = traverse.next;
    }
  }

  removeKey(key) {
    let traverse = this.root;
    let parent = null;
    while (traverse != null) {
      if (traverse.getKey() === key) {
        if (parent === null) {
          this.clearList();
        } else {
          parent.next = traverse.next;
        }

        if (traverse === this.#tail) {
          this.#tail = parent;
        }

        this.size--;
      }
      parent = traverse;
      traverse = traverse.next;
    }
  }

  getValue(key) {
    let traverse = this.root;
    while (traverse != null) {
      if (traverse.getKey() === key) {
        return traverse.getValue();
      }
      traverse = traverse.next;
    }
  }

  clearList() {
    this.root = null;
    this.size = 0;
    this.#tail = null;
  }

  initRoot(value, key) {
    this.root = new Node(null, value, key);
    this.#tail = this.root;
    this.size = 1;
  }
}

class Node {
  #value;
  #key;
  constructor(next, value, key) {
    this.next = next;
    this.#value = value;
    this.#key = key;
  }

  getValue() {
    return this.#value;
  }

  getKey() {
    return this.#key;
  }
}

// let list = new LinkedList(5);
// list.append(6);
// list.pop();
// list.remove(5);
// console.log("first");
// list.traverse();
// list.append(7, 1);
// list.append(9);
// list.append(10);
// list.append(11);
// list.remove(10);
// console.log("second");
// list.traverse();
// console.log(list.size);
// console.log("keys:", list.getKeys());

import { LinkedList } from "./linkedlist.js";

class hashmap {
  #loadfactor;
  #length;
  #sizeFactor = 16;
  #totalsize = 0;
  constructor() {
    this.#loadfactor = 0.75;
    this.buckets = new Array(this.#sizeFactor);
    this.#totalsize = this.#sizeFactor;
    this.#length = 0;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 3;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    if (this.#length / this.#totalsize > this.#loadfactor) {
      console.log("DOUBLED SIZE OF BUCKETS");
      this.buckets = this.buckets.concat(new Array(this.#sizeFactor));
      this.#totalsize += this.#sizeFactor;
    }

    let index = this.getIndex(key);
    if (!this.buckets[index]) {
      this.buckets[index] = new LinkedList(value, key);
    } else {
      this.buckets[index].append(value, key);
    }
    this.#length++;
  }

  get(key) {
    let index = this.getIndex(key);
    if (!this.buckets[index]) {
      return null;
    }
    return this.buckets[index].getValue(key);
  }

  getIndex(key) {
    let index = this.hash(key) % this.#totalsize;
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    return index;
  }

  has(key) {
    let index = this.getIndex(key);
    if (!this.buckets[index]) {
      return false;
    }
    return this.buckets[index].getValue(key) !== null;
  }

  remove(key) {
    let index = this.getIndex(key);
    if (!this.buckets[index]) {
      return;
    }

    this.buckets[index].removeKey(key);
    this.#length--;
  }

  debug() {
    let allKeys = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        console.log(bucket.getKeys());
      }
    }
    return allKeys;
  }

  length() {
    return this.#length;
  }

  clear() {
    for (let bucket of this.buckets) {
      if (bucket) {
        bucket.clearList();
      }
    }
    this.#length = 0;
  }

  keys() {
    let allKeys = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        allKeys = allKeys.concat(bucket.getKeys());
      }
    }
    return allKeys;
  }

  values() {
    let allKeys = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        allKeys = allKeys.concat(bucket.getValues());
      }
    }
    return allKeys;
  }

  entries() {}
}

let map = new hashmap();
map.set("Asd", 12);
map.set("rAsd", 13);

console.log(map.get("Asd"));
console.log(map.get("rAsd"));
console.log(map.length());

console.log(map.has("resd"));
map.remove("Asd");
console.log(map.get("rAsd"));
console.log(map.length());
console.log("keys:", map.keys());
console.log("values:", map.values());
map.clear();
map.set("jww", 188);
map.set("opps", 344);
console.log("newlength", map.length());
console.log(map.get("Asd"));
console.log(map.get("jww"));
console.log("keys:", map.keys());
console.log("values:", map.values());

for (let i = 0; i < 20; i++) {
  map.set((Math.random() + 1).toString(36).substring(7), i);
}

console.log("keys:", map.keys());
console.log("values:", map.values());
map.debug();

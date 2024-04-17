class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(root) {
    this.root = root;
  }

  static buildTree(array) {
    return this.setupTreeMid(0, array.length, array);
  }

  static setupTreeMid(start, end, array) {
    if (start >= end) {
      return null;
    }
    let mid = Math.floor((start + end) / 2);
    let root = new Node(array[mid]);
    console.log(root.data, start, end, mid);
    root.left = this.setupTreeMid(start, mid, array);
    root.right = this.setupTreeMid(mid + 1, end, array);
    return root;
  }

  //0,1 [1]
  //0,

  //0,2  [1,2]  2
  //0,0  2 -> 1

  //0,3  [1,2,3] 2
  //0,1   2,3
  // 0,   2
  insert(value) {}

  deleteItem(value) {}
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

let arr = [1, 2, 3, 4, 20, 22, 83, 92, 101];
let root = Tree.buildTree(arr);
console.log(prettyPrint(root));
console.log(root.data);

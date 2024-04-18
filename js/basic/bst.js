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
    // console.log(root.data, start, end, mid);
    root.left = this.setupTreeMid(start, mid, array);
    root.right = this.setupTreeMid(mid + 1, end, array);
    return root;
  }

  insert(value) {
    let node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return;
    }
    let traverse = this.root;
    let parent = traverse;
    while (traverse != null) {
      parent = traverse;
      if (value < parent.data) {
        traverse = traverse.left;
      } else {
        traverse = traverse.right;
      }
    }

    if (value < parent.data) {
      parent.left = node;
    } else {
      parent.right = node;
    }
  }

  #deleteParentsChildBasedOnDirection(parent, isRight, childToSet) {
    if (isRight) {
      parent.right = childToSet;
    } else {
      parent.left = childToSet;
    }
  }

  #getSuccessorAndParent(rootNode) {
    let traverse = rootNode.right;
    let parent = rootNode;
    while (traverse.left != null) {
      parent = traverse;
      traverse = traverse.left;
    }
    return [parent, traverse];
  }

  deleteItem(value) {
    let traverse = this.root;
    let parent = traverse;
    while (traverse != null) {
      if (traverse.data == value) {
        if (traverse.left == null && traverse.right == null) {
          this.#deleteParentsChildBasedOnDirection(
            parent,
            parent.data < value,
            null
          );
        } else if (traverse.left != null && traverse.right != null) {
          let [parentOfSuccessor, successor] =
            this.#getSuccessorAndParent(traverse);
          this.#deleteParentsChildBasedOnDirection(
            parentOfSuccessor,
            parentOfSuccessor.data < successor.data,
            null
          );
          if (this.root.data == value) {
            this.root = successor;
          }
          successor.left = traverse.left;
          successor.right = traverse.right;
          this.#deleteParentsChildBasedOnDirection(
            parent,
            parent.data < value,
            successor
          );
        } else if (traverse.left != null) {
          this.#deleteParentsChildBasedOnDirection(
            parent,
            parent.data < value,
            traverse.left
          );
        } else if (traverse.right != null) {
          this.#deleteParentsChildBasedOnDirection(
            parent,
            parent.data < value,
            traverse.right
          );
        }
      }
      parent = traverse;

      if (value < traverse.data) {
        traverse = traverse.left;
      } else {
        traverse = traverse.right;
      }
    }
  }

  inorder(root, callback = () => {}) {
    if (root == null) {
      return;
    }
    this.inorder(root.left, callback);
    callback(root.data);
    this.inorder(root.right, callback);
  }

  inorderPush(root, array) {
    if (root == null) {
      return;
    }
    this.inorderPush(root.left, array);
    array.push(root.data);
    this.inorderPush(root.right, array);
  }

  levelOrder(callback = () => {}) {
    let visitingStack = [this.root];
    while (visitingStack.length > 0) {
      let curr = visitingStack.shift();
      callback(curr);
      if (curr.left != null) {
        visitingStack.push(curr.left);
      }
      if (curr.right != null) {
        visitingStack.push(curr.right);
      }
    }
  }

  heightOfSubtree(node, height) {
    if (node.left == null && node.right == null) {
      return height;
    }
    let leftNodeHeight = 0;
    let rightNodeHeight = 0;
    if (node.left != null) {
      leftNodeHeight = this.heightOfSubtree(node.left, height + 1);
    }

    if (node.right != null) {
      rightNodeHeight = this.heightOfSubtree(node.right, height + 1);
    }
    return Math.max(leftNodeHeight, rightNodeHeight);
  }

  isBalanced() {
    let leftHeight = 0;
    if (this.root.left != null) {
      leftHeight = this.heightOfSubtree(this.root.left, 1);
    }

    let rightHeight = 0;
    if (this.root.right != null) {
      rightHeight = this.heightOfSubtree(this.root.right, 1);
    }
    return Math.abs(leftHeight - rightHeight < 2);
  }

  rebalance() {
    let sortedTree = [];
    this.inorderPush(this.root, sortedTree);
    console.log(sortedTree);
    let newRoot = Tree.buildTree(sortedTree);
    this.root = newRoot;
  }
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

let arr = [1, 5, 9, 12, 20, 22, 83, 92, 101];
let root = Tree.buildTree(arr);
console.log(prettyPrint(root));
let tree = new Tree(root);
tree.insert(4);
tree.insert(8);
tree.insert(7);
tree.insert(98);
//tree.inorder(tree.root, console.log);
console.log(prettyPrint(root));
tree.deleteItem(7);
tree.deleteItem(22);
tree.deleteItem(1);
console.log(prettyPrint(root));
tree.deleteItem(92);
tree.deleteItem(20);
console.log(prettyPrint(tree.root));
console.log(tree.heightOfSubtree(tree.root, 1));
console.log(tree.isBalanced());
tree.insert(13);
tree.insert(14);
tree.insert(15);
tree.insert(16);
console.log(prettyPrint(tree.root));
console.log("height:", tree.heightOfSubtree(tree.root, 1));
console.log("isBalanced:", tree.isBalanced());
tree.rebalance();
console.log(prettyPrint(tree.root));

// let emptyTree = new Tree(null);
// emptyTree.insert(20);
// emptyTree.insert(6);
// emptyTree.insert(7);
// emptyTree.insert(98);
// console.log(prettyPrint(emptyTree.root));

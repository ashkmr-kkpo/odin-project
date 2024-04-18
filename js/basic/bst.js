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

  inorder(root) {
    if (root == null) {
      return;
    }
    this.inorder(root.left);
    console.log(root.data);
    this.inorder(root.right);
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
tree.inorder(tree.root);
console.log(prettyPrint(root));
tree.deleteItem(7);
tree.deleteItem(22);
tree.deleteItem(1);
console.log(prettyPrint(root));
tree.deleteItem(92);
tree.deleteItem(20);

console.log(prettyPrint(tree.root));

// let emptyTree = new Tree(null);
// emptyTree.insert(20);
// emptyTree.insert(6);
// emptyTree.insert(7);
// emptyTree.insert(98);
// console.log(prettyPrint(emptyTree.root));

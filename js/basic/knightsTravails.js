//build a graph
//any duplicate position shouldn't be added
//memoization to lookup places we've already been
//s
class position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.children = [];
  }

  addChild(pos) {
    this.children.push(pos);
  }
}

function dfs(traverse, dest, callback) {
  //console.log("traverse", traverse);
  if (traverse.x == dest.x && traverse.y == dest.y) {
    return true;
  }

  for (let child of traverse.children) {
    if (dfs(child, dest, callback)) {
      callback(child);
      return true;
    }
  }
}

function findPath(src, dst) {
  let path = [];
  function callback(node) {
    path.unshift(node);
  }
  dfs(src, dst, callback);
  path.unshift(src);
  return path;
}

function buildGraphFromSource(pos1, pos2) {
  let memo = [];
  memo = new Array(7).fill(0);
  for (let i = 0; i < 8; i++) {
    memo[i] = new Array(8).fill(0);
  }
  memo[pos1.x][pos1.y] = 1;
  let root = pos1;
  let stack = [root];
  let found = false;
  do {
    let curr = stack.shift();
    let children = findNextPositions(curr, memo);
    curr.children = children;
    stack = stack.concat(children);

    for (let child of children) {
      if (child.x == pos2.x && child.y == pos2.y) {
        console.log("FOUND", child);
        found = true;
      }
    }
    if (found == true) {
      break;
    }
  } while (stack.length > 0);
  return root;
}

function findNextPositions(pos1, memo) {
  return getAdjacentPositions(pos1.x, pos1.y, memo).filter((el) => {
    if (el != null) {
      return el;
    }
  });
}

function validPosition(x, y, memo) {
  if (x < 0 || y < 0 || x > 7 || y > 7 || memo[x][y] == 1) {
    return null;
  }
  memo[x][y] = 1;
  return new Node(x, y);
}

function getAdjacentPositions(x, y, memo) {
  return [
    validPosition(x + 1, y + 2, memo),
    validPosition(x + 1, y - 2, memo),
    validPosition(x - 1, y + 2, memo),
    validPosition(x - 1, y - 2, memo),
    validPosition(x + 2, y + 1, memo),
    validPosition(x + 2, y - 1, memo),
    validPosition(x - 2, y + 1, memo),
    validPosition(x - 2, y - 1, memo),
  ];
}

function knightTravails(pos1, pos2) {
  let graphRoot = buildGraphFromSource(pos1, pos2);
  let path = findPath(graphRoot, pos2);
  console.log("FINAL PATH:");

  for (let seq of path) {
    console.log(seq.x, seq.y);
  }
}

let pos1 = new Node(0, 0);
let pos2 = new Node(3, 3);
let pos3 = new Node(7, 7);
let pos4 = new Node(1, 6);
let pos5 = new Node(4, 7);
let pos6 = new Node(5, 0);
knightTravails(pos1, pos2);
knightTravails(pos1, pos3);
knightTravails(pos4, pos5);
knightTravails(pos4, pos6);

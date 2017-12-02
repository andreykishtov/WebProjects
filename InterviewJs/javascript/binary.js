function Node(name, value) {
  this.name = name;
  this.value = value;
}

Node.prototype.setLeft = function(left) {
  this.left = left;
};

Node.prototype.setRight = function(right) {
  this.right = right;
};

function insertNode(tree, node) {
  if (!tree) {
    return node;
  }

  if (tree.value < node.value) {
    tree.right ? insertNode(tree.right, node) : tree.setRight(node);
  } else {
    tree.left ? insertNode(tree.left, node) : tree.setLeft(node);
  }
  return tree;
}

function setup(array) {
  let nodeArr = array.map(node => {
    return new Node(node.property, node.value);
  });

  return nodeArr.reduce((arr, cur) => {
    return insertNode(arr, cur);
  }, null);
}

function findHight(node) {
  if (!node) {
    return -1;
  }
  return Math.max(findHight(node.left), findHight(node.right)) + 1;
}

let array = [
  { property: 'a', value: 5 },
  { property: 'b', value: 12 },
  { property: 'c', value: 10 },
  { property: 'd', value: 15 },
  { property: 'e', value: 20 },
  { property: 'f', value: 25 },
  { property: 'g', value: 8 },
  { property: 'e', value: 3 }
];

let arrayB = [
  { property: 'a', value: 5 },
  { property: 'b', value: 12 },
  { property: 'c', value: 10 },
  { property: 'd', value: 15 },
  { property: 'e', value: 20 },
  { property: 'f', value: 25 },
  { property: 'g', value: 8 },
  { property: 'e', value: 3 }
];

let tree = setup(array);
let treeB = setup(arrayB);

function compareTree(nodeA, nodeB) {
  if (!nodeA || !nodeB) {
    if (nodeA || nodeB) {
      return false;
    }
    return true;
  } else {
    return (
      nodeA.value === nodeB.value &&
      compareTree(nodeA.left, nodeB.left) &&
      compareTree(nodeA.right, nodeB.right)
    );
  }
}

// console.log(compareTree(tree, treeB));

let print = node => {
  let visited = -1;
  printLefts(node, 0);

  function printLefts(node, level) {
    if (!node) {
      return;
    }
    if (level > visited) {
      console.log(node.value);
      ++visited;
    }
    printLefts(node.left, level++);
    printLefts(node.right, level++);
  }
};

print(tree);

function findCommonRoot(tree, firstValue, secondValue) {
  let left = function findLeft(tree, firstValue) {
    if (!tree) {
      return;
    }

    return findLeft(tree.next, firstValue);
    return findLeft(tree.next, firstValue);
  };
}

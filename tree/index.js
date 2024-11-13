class Tnode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Tnode(value);
  }

  insert(value) {
    const newNode = new Tnode(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;

          break;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;

          break;
        }
        currentNode = currentNode.right;
      }
    }
  }

  bfs(tar) {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    let targetResult = null;

    let currentDepth = 0;
    queue.push({ ...currentNode, depth: currentDepth });
    while (queue.length > 0) {
      currentNode = queue.shift();

      if (currentNode.value === tar) {
        targetResult = { val: currentNode.value, depth: currentNode.depth };
        return targetResult;
        break;
      }

      list.push({ val: currentNode.value, depth: currentNode.depth });

      if (!!currentNode.left)
        queue.push({
          ...currentNode.left,
          depth: currentNode.depth + 1,
        });
      if (!!currentNode.right)
        queue.push({
          ...currentNode.right,
          depth: currentNode.depth + 1,
        });
    }

    if (tar && targetResult === null) {
      return "not found";
    }

    return list;
  }

  dfs() {
    let result = [];
    let stack = [];
    let curNode = this.root;

    stack.push(curNode)
    while (stack.length > 0) {
      const cur = stack.pop();
      result.unshift(cur.value);

      if (cur.left) stack.push(cur.left);
      if (cur.right) stack.push(cur.right);
    }

    // function traverseHelper(node) {
    //   if (node.left) traverseHelper(node.left);
    //   if (node.right) traverseHelper(node.right);
    //   result.push(node.value);
    // }

    // traverseHelper(this.root);

    return result;
  }

}

const bst = new BST(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(4);
bst.insert(6);
bst.insert(9);
bst.insert(12);
bst.insert(17);
bst.insert(16);
bst.insert(19);

// console.log(bst.bfs());
console.log(bst.dfs());

// console.log(bst.bfs(4));

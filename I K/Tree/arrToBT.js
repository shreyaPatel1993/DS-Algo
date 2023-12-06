class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function arrayToBinaryTree(arr) {
    if (!arr.length) {
      return null;
    }
  
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
  
    while (i < arr.length) {
      const currentNode = queue.shift();
  
      // Create the left child
      if (i < arr.length && arr[i] !== null) {
        currentNode.left = new TreeNode(arr[i]);
        queue.push(currentNode.left);
      }
      i++;
  
      // Create the right child
      if (i < arr.length && arr[i] !== null) {
        currentNode.right = new TreeNode(arr[i]);
        queue.push(currentNode.right);
      }
      i++;
    }
  
    return root;
  }
  
  // Example usage:
  const arr = [6,3,5,null,2,0,null,null,1];
  const root = arrayToBinaryTree(arr);
  console.log(root);
  
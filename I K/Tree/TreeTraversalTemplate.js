/*  =============           BFS Template       ==============*/
// uses Queue (FIFO) to store the list of nodes to be evaluated.
// Big O calculation: time - amount of work done by each node * no. of nodes, Queue space - breadth of the tree (max no. of leaf nodes stored)

// LC 102. Binary Tree Level Order Traversal - return 2D array of nodes at each level in BT - O(n) - time and space
var bfs = function (root) {
    if (!root) return []; // return default value

    let q = []; // initialize Queue()
    q.push(root);
    let res = [];

    while (q.length) {
        let len = q.length, temp = [];
        // for array of array - level order arrays
        for (let i = 0; i < len; i++) { // run until q's length
            let node = q.shift(); // take out the first node from the q
            temp.push(node.val);
            if (node.left) q.push(node.left); // push its left child
            if (node.right) q.push(node.right); // push its right child
        }
        res.push(temp);
    }
    return res;
};

/*  =============        DFS Template       ==============*/
// Uses Recursion (LIFO) to store nodes to be evaluated.
// Big O calculation for DFS: time - amount of work done by each node * no. of nodes, stack space - height of the tree

/* 1. Top down DFS - all information in the recursive call flows down and nothing is return to upper level */

//LC 112. Path Sum - does any root to leaf path's sum (sum of nodes) equals to targetSum - o(n) time and space.
var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    let res = false;
    dfs(root, targetSum);
    return res;

    function dfs(node, remaining) {
        if (node.left == null && node.right == null) { //leaf 
            if (remaining == node.val) res = true;
            return; // just terminate  
        }
        if (node.left) {
            dfs(node.left, remaining - node.val);
        }
        if (node.right) {
            dfs(node.right, remaining - node.val);
        }
    }
};

/* 2. Bottom up DFS - all information in the recursive call flows up by returning it, no extra parameters to send in recursive call 
- usually bottom up DFS will be done in 2 parts, 1. processing info from both subtree coming from left and right, 2. returning info to the parent */

// LC 543.
/* Gobal problem: Find the diameter of the whole tree
Local (per-node) problem: Find the longest inverted-V shaped path of the node.
Local -> Global: Global solution is the max of all the local solutions
To get the local solution, each node needs to the height of their left and right subtree */
var diameterOfBinaryTree = function(root) {
    if(!root) return 0;
    let globalDia = 0;
    dfs(root);
    return globalDia;

    function dfs(node){
        if(!node.left && !node.right) return 1;
        let left = 0, right = 0;
        if(node.left) left = dfs(node.left);
        if(node.right) right =  dfs(node.right);
        const localDia = left + right;
        globalDia = Math.max(localDia, globalDia); // update global result if local result is more
        return Math.max(left, right)+1; // returning my own height
    }
};

// LC 250. Count Unival subtrees
/*   Each node can determine whether the subtree rooted at it is unival.
    If yes, then we add 1 to the global count.
    But to determine whether a subtree is unival, the root node will need
    to know whether its (up to) two children are unival or not.
    So that is the information which needs to be returned by the child to its parent.
    Time and space: O(n) - unbalanced BT */
function countUnivalSubtrees(root) {
    if (!root) return 0;
    const globalCount = 0;
    dfs(root);
    return globalCount;

    function dfs(node) {
        let isUnival = true;
        if (!node.left && !node.right) {
            globalCount++; // leaf is always unival
            return true; // base case and Computing my unival - Part 1.
        }
        // Recursive cases: Internal nodes
        if (node.left) {
            const isLeftUnival = dfs(node.left);
            if (!isLeftUnival || node.val !== node.left.val) isUnival = false; // Computing my unival - Part 1.
        }
        if (node.right) {
            const isRightUnival = dfs(node.right);
            if (!isRightUnival || node.val !== node.right.val) isUnival = false; // Computing my unival - Part 1.
        }
        if (isUnival) globalCount++; // Adding to global count - Part 2.

        return isUnival; // passing it to parent - Part 1.
    }
}
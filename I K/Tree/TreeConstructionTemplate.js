/* Tree Construction Patterns */
// Divide and conquer is used to construct a tree


/* 1. Top - down Tree construction pattern (Pre-oder) */
/* Popular type of construction method is Top-down.
There are 3 parts:
1. Figure out the root and construct it
2. Recursively construct left subtree
3. Recursively construct right subtree
*/

// LC 108. Convert Sorted Array To Binary Search Tree (AVL)
// Time: O(n), space: output(tree)- O(n), call stack - O(log n) - height of AVL BST.

function sortedArrayToBST(nums) {
    return helper(0, nums.length - 1);

    function helper(start, end) {
      if (start > end)  return null;
      if (start == end) {
        return new TreeNode(nums[start]);
      } 
        const mid = Math.floor((start + end) / 2);
        const subTreeRoot = new TreeNode(nums[mid]);
        subTreeRoot.left = helper(start, mid - 1);
        subTreeRoot.right = helper(mid + 1, end);
        return subTreeRoot;
    }
  }
 
 //LC 105. / LC 106.
// LC 1008.



/* 2. Left to Right Tree construction pattern (In- order) */
/* There are 3 steps:
1. Recursively construct left subtree
2. construct the root
3. Recursively construct right subtree
advantage: given sorted linked list, you can construct a BT in O(n) time
 */
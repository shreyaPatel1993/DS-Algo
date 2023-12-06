/*
Libs included:
    underscore lodash chai sinon sinon-chai mocha async request q bluebird jsdom
    
    
    
3-years

-----


   link-list: head->  1 2 3 4 5 6
    (sorted)
    
    return Balanced binary search tree :  root
    
    1) convert to sorted array
    2) select middle
    3) recursively built left & right
    
    Time Complexity: O(N)
    Space:  O(N)
       - stack space: O(log N)
       //- extra space:  (array): O(N)
       - output space: O(N)
    
    
    
    root
    1
     \
      2
       \
        3
        
        [1,2,3] ==>    
    
    root
    3
   /
   1
    \
     2
     
     
     [3, 1, 2] (pre-order-binary search tree(BST) array) (no duplicate) ==> root
     
      2
    /  \
   1    3
     
     [2, 1, 3] 
     
     
     def isBST(root)
    
    
     
*/

function main(arr){
    
    let i = 0;
    
    return dfs(arr, -Infinity, Infinity);
    
    function dfs(arr, min, max){
         
        if (i == arr.length) return nil;
    
        let val = arr[i];
        
        if(val > max || val < min) return nil;

        i = i + 1;
        
        let left = dfs(arr, val, max);

        let right = dfs(arr, min, val);

        return new BST(val, left, right);
        
    }

    
}


function isBST(root, min, max){
    
    if(!root) return true;
    
    if(root.val > max || root.val < min) return false;
    
    let left = isBST(node.left, node.val, max);
    
    let right = isBST(node.right, min, node.val);
    
    return left && right;
    
}


console.log('Hello, world!');
function main(head){
    let sortedArray = []; // O(n)
    let cnt = 0;
    while(head){//O(N)
        cnt = cnt + 1;
        head = head.next;
    }
    
    return dfs(0, cnt-1);
    
    function dfs(start, end){
        if(start > end) return null;
        
        let mid = Math.floor((start+end)/2);
        
        
        let left = dfs(start, mid-1);
        
        let val = head.val;
        head = head.next;
        
        let root = new BST(val);
        root.left = left;
        root.right = dfs(mid+1, end);
        
        return root;
    }
}


function main_ver1(head){
    let sortedArray = []; // O(n)
    while(head){//O(N)
        sortedArray.push(head.val);
        head = head.next;
    }
    
    return dfs(0, sortedArray.length-1);
    
    function dfs(start, end){
        if(start > end) return null;
        
        let mid = Math.floor((start+end)/2);

        let root = new BST(sortedArray[mid]);
        
        root.left = dfs(start, mid-1);
        root.right = dfs(mid+1, end);
        
        return root;
    }
}
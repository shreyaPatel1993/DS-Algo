function helper (arr, start, end , index ){
	// Base Case : Leaf worker
	if (start == end) return arr[start];// Subproblem size 1
	// Recursive case : internal node worker
	// Lomuto's Partion code: (in place partition of smaller numbers to the left of pivotNum ) #lomutoPartition 
        let pivotNum = arr[start]; //select the first element as pivot number
        let smaller = start;

        for(let bigger = start+1; bigger <= end; bigger++){
            if(arr[bigger] <= pivotNum){ // if curr element is less than pivot
                smaller++; // increment smaller to get it swapped with the left most bigger(left side)
                [arr[smaller], arr[bigger]] = [arr[bigger], arr[smaller]];//swap to move smaller elements to the left
            }
        }
        [arr[start], arr[smaller]] = [arr[smaller], arr[start]]; // Place the pivot in the correct spot

	if (index == smaller) return arr[index];//Lucky Case

	else if (index < smaller){
		return	helper(arr, start, smaller-1, index)
	}
	else { // index > smaller:
		return helper(arr, smaller+1, end, index)
	}
}

function quickSelect(nums, k){
	return helper(nums, 0, nums.length-1, nums.length-k)
}

// ===========     Randomized version    =====================

var findKthLargest = function(nums, k) {
    return helper(nums, 0, nums.length - 1, nums.length - k);
};

function helper (arr, start, end , index ){
	// Base Case : Leaf worker
	if (start == end) return arr[start];

    // Choose a random pivot index within the range
    let pivotIdx = Math.floor(Math.random() * (end - start + 1)) + start;
	//bring pivot to the start: swap the pivot element with start element
	[arr[pivotIdx], arr[start]] = [arr[start], arr[pivotIdx]];
    
    let smaller = start, pivotNum = arr[start];

        for(let bigger = start+1; bigger <= end; bigger++){
            if(arr[bigger] <= pivotNum){ 
                smaller++; 
                [arr[smaller], arr[bigger]] = [arr[bigger], arr[smaller]];
            }
        }
        [arr[start], arr[smaller]] = [arr[smaller], arr[start]]; 
	if (index == smaller) return arr[index];
	else if (index < smaller){
		start//? 
        smaller//?
		return	helper(arr, start, smaller-1, index)
	}
	else { 
		return helper(arr, smaller+1, end, index)
	}
}

quickSelect([5,2,4,1,3,6,0], 4) //?
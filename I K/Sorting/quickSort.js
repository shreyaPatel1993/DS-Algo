/* 
Steps:
1. choose a pivot element, e.g: at index 0
2. Partition the array in such a way that all the smaller or equal elements goes to the left and bigger elements remains to the right
3. Recursively apply the algorithm to the subarrays on the left and right of the pivot.  
*/

function quickSort(arr){
    helper(arr, 0, arr.length);
    return arr;
}

function helper(arr, start, end){
    if (start >= end) return;
    // Lumoto's Partion code: (in place partition of smaller numbers to the left of pivotNum )
    // Choose a random pivot index within the range
    let pivotIdx = Math.floor(Math.random(end - start) + start);
	//bring pivot to the start: swap the pivot element with start element
	[arr[pivotIdx], arr[start]] = [arr[start], arr[pivotIdx]];
    let smaller = start, pivotNum = arr[start];

        for(let bigger = start+1; bigger < end ; bigger++){ // start bigger at the next index until end
            if(arr[bigger] <= pivotNum){ // if curr element is less than pivot
                smaller++; // increment smaller to get it swapped with the left most bigger(left side)
                [arr[smaller], arr[bigger]] = [arr[bigger], arr[smaller]];//swap to move smaller elements to the left
            }
        }
        // Place the pivot in the right spot (pivot will be at the smaller index)
        [arr[start], arr[smaller]] = [arr[smaller], arr[start]]; 

    helper(arr, start, smaller); // call left side of the pivot
    helper(arr, smaller+1, end); // call right side of the pivot
    
}

 quickSort([-1, -5, 5, 0, 2, 5 , 3,6 ]); //?








/* =======   All problems Solved as part of IK training including LC problems    ============== */

/* ================================================================================== */
/*                               Live class Sorting                                   */
/* ================================================================================== */
/* 
 1. LC 1. Two Sum :
	* when given an unsorted array :
	- if we use Hash table then T(n) but space will also be S(n) - used when returning index
	- its time complexity will be O(n log n) if we pre sort it (used only when idex is not returned)
		
  2. LC 167. Two Sum 2 - for sorted array if used two pointer then time will be O(n)
*/
function twoSum(nums, target){ // find indices of a pair that equals to target in a array.

	let map = new Map();
	for(let i =0; i < nums.length; i++){
		let find = target - nums[i];
		if(map.has(find)) return [map.get(find), i ];
		else map.set(nums[i], i);
	}
}

function twoSum2(nums, target){ // find a pair that equals to target in a sorted array.

	let i = 0, j = nums.length-1;
	while(i < j){
		let sum = nums[i] + nums[j];

		if(sum == target) return [nums[i], nums[j]];
		else if(sum > target) j--;
		else i++;
	}
}

// twoSum([2, -1, 3, 7, 8], 1)//?
// twoSum2([-1, 2, 3, 7, 8], 1)//?

/* ================================================================================== */
/* 3. LC 252. Meeting Rooms: 
	* presorting + comparing - T(o log n) because of sorting
*/ 

var canAttendMeetings = function(intervals) {
	intervals.sort((a, b) => a[0]-b[0]) 
	for(let curr = 1; curr < intervals.length; curr++){
		let prev = intervals[curr-1], current = intervals[curr] 
		if(current[0] < prev[1]) return false;
	} 
	return true;
}

// canAttendMeetings([[0,30],[5,10],[15,20]]); //? 
// canAttendMeetings([[7,10],[2,4]]);//?

/* ================================================================================== */
/* 4. LC  15. 3Sum - find triplets whos sum is equal to 0.
    - sorting and then using two pointer method to find triplets
    - time - T(n2) to find triplets, space - output space
 */

var threeSum = function (nums) {
	nums.sort((a, b) => a - b);
	let res = [];

	for (let i = 0; i < nums.length - 2; i++) {
		if(nums[i] > 0) break; //break if num at i is more than 0 then everything on right will be more
		if (i === 0 || (nums[i] !== nums[i - 1])) { // skip loop if current element is a duplicate
			let s = i + 1, b = nums.length - 1;

			while (s < b) {
				let sum = nums[i] + nums[s] + nums[b];
				if (sum < 0) s++;
				else if (sum > 0) b--;
				else {
					res.push([nums[i], nums[s], nums[b]]);
					s++;
					b--;
					// Move s and b to the next unique elements to avoid duplicate triplets
					while (s < b && nums[s] === nums[s - 1]) s++;
				}
			}
		}
	}
	return res;
}

const nums = [-1, 0, 1, 2, -1, -4];
// threeSum(nums);//?

/* ================================================================================== */
/* 5. Intersection of two sorted arrays
    - find common nums from both the arrays, use merge part of mergeSort
    - Tow pointer used, Time: O(n)
 */
function intersectionTwoSorted(left, right){
    let res = [];
    let l = 0, r = 0;
    while(l < left.length && r < right.length){
        if(left[l] == right[r]){
            res.push(left[l]);
            l++;
            r++;
        } else if(left[l] < right[r]){
            l++
        } else r++
    }
    return res;
}
// intersectionTwoSorted([-1,2,3,4,7], [-1,0,4,5,6,8]); //?

/* ================================================================================== */
/* 6.  Union of two sorted arrays
    - find unique nums from both the arrays
    - Two pointers used, Time: O(n)
 */
    function unionTwoSorted(left, right){
        let res = [];
        let l = 0, r = 0;
        while(l < left.length && r < right.length){
            if(left[l] == right[r]){
                res.push(left[l]);
                l++;
                r++;
            } else if(left[l] < right[r]){
                res.push(left[l]);
                l++
            } else{
                res.push(right[r]);
                r++;
            } 
        }
        while(l < left.length) res.push(left[l++]);
        while(r < right.length) res.push(right[r++]);
        return res;
    }
//    unionTwoSorted([-1,2,4,8,10,11,12,13], [-1,0,4,5,6,8]); //?

/* ================================================================================== */
/* 7. LC 349. Intersection of Two Arrays (not sorted)
    * result should be unique
    * used hash set as its not sorted
    - Time: O(m+n) whichever has more length
    - Space: O(m+n) whichever has more length
 */
var intersectionTwo = function(nums1, nums2) {
    let set = new Set(nums1)
	let res = [];

	for(let i = 0; i < nums2.length; i++){
		if(set.has(nums2[i])){
			res.push(nums2[i]);
			set.delete(nums2[i]); // to avoid duplicates from nums2
		} 
	}
	return res;
};

// intersectionTwo([1,2,2,1], [2,2]) //?

/* ================================================================================== */
/* 8. LC 88. Merge Sorted Array - where nums1 length is m+n
    - three pointer method
    - time: O(m+n)
*/
var merge = function(nums1, m, nums2, n) {
    let i = m-1, j = n-1, k= nums1.length-1;
        while(j >= 0){
                if(nums2[j] <= nums1[i]){
                    nums1[k] = nums1[i];
                    i--;
                } else {
                    nums1[k] = nums2[j];
                    j--;
                }
            k--;
        }
        return nums1;
    };
// merge([1,2,3,0,0,0], 3, [2,5,6], 3) //?
// merge([3,4,5,6,0,0,0,0], 4, [4, 5, 6,7], 4) //?
// merge([4,0,0], 1, [1,2], 2) //?
// merge([1,2,5,6,0,0,0], 4, [4,5,6], 3) //?

/* ================================================================================== */
/* 9. LC 1213. Intersection of Three Sorted Arrays
    - three pointer method
    - time: O(n)
*/
var IntersectionThreeSorted = function (arr1, arr2, arr3) {
	let i = 0, j = 0, k = 0;
	let res = [];
	while (i < arr1.length && j < arr2.length && k < arr3.length) {
 
		if (arr1[i] < arr2[j]) i++;
		else if (arr2[j] < arr3[k]) j++;
		else if (arr3[k] < arr1[i]) k++;
		else {
			res.push(arr1[i]);
			i++, j++, k++;
		}
	}
	return res;
};
// IntersectionThreeSorted([1, 2, 3, 4, 5], [0, 1, 2, 5, 7, 9], [1, 3, 4, 5, 8]); //?

/* ================================================================================== */
/* 10. LC 215. Kth Largest Element in an Array
    - QuickSelect problem
    - time: worst - O(n2), average - O(n) and space - call stack O(n)
*/
var findKthLargest = function(nums, k) {
	quick(nums, 0, nums.length, k);
    return nums[nums.length-k];
    function quick(arr, start, end, k){
        if(start >= end) return;
        let pivot = arr[start], smaller = start;
    
        for(let bigger = start+1; bigger < end; bigger++){
            if(arr[bigger] <= pivot){
                smaller++;
                [arr[smaller], arr[bigger]] = [arr[bigger], arr[smaller]];
            }
        }
        [arr[smaller], arr[start]] = [arr[start], arr[smaller]];
    
        if(smaller == arr.length-k) return;
        else if(smaller < arr.length-k) quick(arr, smaller+1, end,k );
        else quick(arr, start, smaller,k)
    }
};
// findKthLargest([7,6,5,4,3,2,1], 2)//?

/* ================================================================================== */
/* 11. LC 973. K Closest Points to Origin - Math and Geometry question
    - QuickSelect problem 
    - time: worst - O(n2), average - O(n) and space - call stack O(n)
*/
var kClosest = function (points, k) {
    quickSelect(points, 0, points.length, k);
    return points.slice(0, k);

    function quickSelect(arr, start, end, k) {
        if (end <= start) return;
        let first = arr[start], smaller = start;
        // calculate pivot value by given points:
        let pivot = (first[0] * first[0]) + (first[1] * first[1]);

        for (let biggerIdx = start + 1; biggerIdx < end; biggerIdx++) {

            let bigger = arr[biggerIdx];
            let biggerValue = (bigger[0] * bigger[0]) + (bigger[1] * bigger[1]); // calculate each ith ele

            if (biggerValue < pivot) {
                smaller++;
                [arr[smaller], arr[biggerIdx]] = [arr[biggerIdx], arr[smaller]];
            }
        }
        [arr[start], arr[smaller]] = [arr[smaller], arr[start]];

        if (smaller == k) return;
        else if (smaller > k) quickSelect(arr, start, smaller, k);
        else quickSelect(arr, smaller + 1, end, k);
    }
};
// kClosest([[3,3],[5,-1],[-2,4],[0,0]], 1)//?

/* ================================================================================== */
/* 12. LC 347. Top K Frequent Elements
 - There are many other ways to solve this using Quick select -time: O(n) to O(n2), Heap sort-time: O(n log k)
 - we will solve it 1. Hash Map and 2. Quick select (both are optimized solution)
 - I Solved it using hash map where Time: O(n), space: O(n) : find the frequency of each element using hash map, 
 and then create a 2-d array, where ith element of it will store all the numbers with frequency i.
*/

/* Quick select solution here where we will sort it by its frequency added in hash map/object */
var topKFrequent = function(nums, k) {
	
	let frequency = {}, unique = Array.from(new Set(nums));
	for(val of nums){
		if(frequency[val]) frequency[val]++;
		else frequency[val] = 1;
	}

	quickSelect(unique, 0, unique.length, unique.length-k);
	return unique.slice(unique.length-k);
	
	function quickSelect(arr, start, end, k) {

		if (start >= end) return;
		let smaller = start, pivotIdx = start;
		for (let bigger = start + 1; bigger < end; bigger++) {
            //comparing and sorting the unique nums by its frequency stores in hash map
			if (frequency[arr[bigger]] <= frequency[arr[pivotIdx]]) { // ** <-----
				smaller++;
				[arr[smaller], arr[bigger]] = [arr[bigger], arr[smaller]];
			}
		}
		[arr[smaller], arr[pivotIdx]] = [arr[pivotIdx], arr[smaller]];

		if (smaller == k) return; // when smaller == k, right side of the array will be all greater frequencies than the kth ele.
		else if (smaller < k) quickSelect(arr, smaller + 1, end, k);
		else quickSelect(arr, start, smaller, k);
	}
}
// topKFrequent([1,2,3,1,2,2], 2)//?
/* Using Hash Map */
var topKFrequent = function(nums, k) { // Hash Map solution
    const times = {}; // keys = nums and values = frequency of those nums

    // set frequency to 2D array filled with empty arrays of arr.length+1, where we can add nums at its frequency index
    const frequency = []; 
    for(let i = 0; i < nums.length+1; i++) frequency[i] = [];

    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        if(num in times) times[num]++;
        else times[num] = 1;

        const numTimes = times[num];
        frequency[numTimes].push(num); //add num at its frequency index
    }

    const res = new Set(); // all unique nums sorted by its frequency(decending)
    for(let i = frequency.length - 1; i>= 0; i--){
        for(let j = 0; j< frequency[i].length; j++){
            res.add(frequency[i][j]);
            if(res.size === k){
                return Array.from(res);
            }
        }
    }
}
// topKFrequent([1,2,3,1,2,2], 2)//?
/* ================================================================================== */
/* 13. LC 75. Sort Colors or Dutch national flag question(sort 3 colors)
 - here we are sorting it by 0,1,2 instead of colors as aksed in LC
 - solved using Lomuto's partition (3 way partition), Time O(n)
*/

var sortColors = function(nums) {
	let loI = -1, miI = -1;
	for(let i = 0; i < nums.length; i++){
		let curr = nums[i];

		if(curr == 0){
			miI++; // first we need to swap it with mid (1) 
			[nums[i], nums[miI]] = [nums[miI], nums[i]]

			loI++; // then swap the mid(1) with lo(0)
			[nums[miI], nums[loI]] = [nums[loI], nums[miI]];
			
		} else if (curr == 1){
			miI++
			[nums[i], nums[miI]] = [nums[miI], nums[i]]
		} else { } // If curr == 2 we don't need to do anything as it will sorted automatically

	}
return nums;
};
// sortColors([2,1,0,2,0,1,2,1]) //?

/* ================================================================================== */

/* =============    Recursion - Combinations, Permutations problems    =============== */

/* =======================   Foundation class  ======================================= */

/* =============     all permutations of binary strings of length n    ============== */

/* Print permutations of binary string of length n
Time: O(2^n) */
function generateBinaryStrings(n, slate = '') {
    // Base case: If the slate reaches length n, print it
    if (n == 0) {
        console.log(slate);
        return;
    }
    // Recursive case: Append '0' and '1' and explore both possibilities
    generateBinaryStrings(n - 1, slate + '0');
    generateBinaryStrings(n - 1, slate + '1');
}

// generateBinaryStrings(3);

//=============      print 0 to 99 arangements       ===========

function generateDecimalStrings(n, slate = '') {
    // Base case: If the slate reaches length n, print it
    if (n == 0) {
        console.log(slate);
        return;
    }
    // Recursive case: Append '0' to '9' and explore all possibilities
    for (let i = 0; i < 10; i++) generateDecimalStrings(n - 1, slate + i)
}

// generateDecimalStrings(2);

//=============       print all subsets of a string      ===========

function generateSubsets(str, slate = '', i = 0) {
    // Base case: n reaches max length of str, print it
    if (i == str.length) {
        console.log(slate);
        return;
    }
    // Recursive case 1: include the ith element to the slate 
    generateSubsets(str, slate + str[i], i + 1);
    // Recursive case 1: exclude the ith element to the slate 
    generateSubsets(str, slate, i + 1);
}

// generateSubsets('abc');

/* ================================================================================== */
/*                         Live class Recursion                                       */
/* ================================================================================== */
/* 14. LC 784. Letter Case Permutations - permute UpperCase and loweCase for each leter in the input string
 - here we permuting 2 choices for letter and 1 choice for digit
 - solved using general template given
 - Time: O(2^n.n) - copying 2^n permutations generated of length n each
 - Space: O(2^n.n) - output - 2^n permutation space of n long each, call stack - O(n).
*/
var letterCasePermutation = function(s) {
    let result = [];
    helper(0, []);
    return result;

    function helper(i, slate){
        if(i == s.length){
            result.push([...slate].join(''));
            return;
        }
        if(!isNaN(s[i])){ //if its a number
          slate.push(s[i]); // only one choice as it is
          helper(i+1, slate)  
          slate.pop();
        } else {
             slate.push(s[i].toUpperCase()); // choice 1: upperCase
             helper(i+1, slate);
             slate.pop();

             slate.push(s[i].toLowerCase()); // choice 2: loweCase
             helper(i+1, slate);
             slate.pop();
        }
    }
};
// letterCasePermutation('1A0b5C1')//?

/* ================================================================================== */
/* 15. LC 46. Permutations - generate all permutations of unique n nums
 - here we making n choices for each num
 - Time: O(n!.n) - copying/cloning n! permutations generated of length n.
 - Space: O(n!.n) - output space - n! permutations space of n length long each, call stack - O(n)
*/
var permute = function(nums) {
    const res= [];
    helper(0, [])
    return res;

    function helper(i, slate){
        if(i == nums.length){
            res.push([...slate]);
            return;
        }
        for(let pick = i; pick < nums.length; pick++){
//swap to move the picked element to the left(i), to let other subordinates choose elements before the i (left half of choosen elements)
            [nums[pick], nums[i]] = [nums[i], nums[pick]];
            slate.push(nums[i]); // push num at i because it has been swapped with pick
            helper(i+1, slate);
            slate.pop();
            [nums[pick], nums[i]] = [nums[i], nums[pick]];
        }
    }
};
// permute([1,2,3])//?
/* ================================================================================== */
/* 16. LC 47. Permutations 2 - generate all unique permutations n nums which has duplicates
 - here we making n choices for each num, we use hash set to keep track of num used to avoid duplicate permutations.
 - Time: O(n!.n) - copying/cloning n! permutations generated of length n.
 - Space: O(n!.n) - output space - n! permutations space of n length long each, call stack - O(n)
 - we cannot use pre sorting here because we need to swap the ith element to the left each time so it will change the ordering.
*/
function permuteUnique(arr) {
    const res = [];
    helper(arr, 0, [])
    return res;
    function helper(arr, index, slate) {
        if (index == arr.length) {
            res.push([...slate]); //clone copy of array 
            return;
        }
        const set = new Set(); //set to keep track of used elements.
        for (let pick = index; pick < arr.length; pick++) { // pick = index to avoid repeated element.
            if (!set.has(arr[pick])) {
                set.add(arr[pick]);
//swap to move the picked element to the left to let other subbordinates choose elements before the index (left half of choosen elements)
                [arr[pick], arr[index]] = [arr[index], arr[pick]];
                slate.push(arr[index]);
                helper(arr, index + 1, slate);
                slate.pop();
                [arr[pick], arr[index]] = [arr[index], arr[pick]];
            }
        }
    }
}
// permuteUnique([1,2,1]) //?
/* ================================================================================== */
/* 17. LC 78. Subsets - generate all subsets of unique n nums
 - here we making 2 choices for each num- 1. exclusion and 2. inclusion in the slate
 - Time: O(2^n.n) - copying/cloning 2^n subsets generated of length n max
 - Space: O(2^n.n) - output space - 2^n subsets space of max n length long, call stack - O(n)
*/
var subsets = function(nums) {
    const res = [];
    helper(0, []);
    return res;

    function helper(i, slate){
        if(i == nums.length){
            res.push([...slate]);
            return;
        }
        slate.push(nums[i]); // inclusion choice
        helper(i+1, slate);
        slate.pop();

        helper(i+1, slate); // exclusion choice
    }
};
// subsets([1,3,0])//?
/* ================================================================================== */
/* 18. LC 90. Subsets 2 - generate all unique subsets of n nums which has duplicates
 - need to pre sort the array to find duplicates to avoid them
 - we are first including all elements, then excluding each unique
 - Time: O(2^n.n) - copying/cloning 2^n subsets generated of length n max
 - Space: O(2^n.n) - output space - 2^n subsets space of max n length long, call stack - O(n)
*/

var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b); // Sort the input array to group duplicates together
    const res = [];
    helper(0, []);
    return res;

    function helper(i, slate) {
        if (i == nums.length) {
            res.push([...slate]);
            return;
        }
        //  All subsets that include current element
        slate.push(nums[i]);
        helper(i + 1, slate);
        slate.pop();
        
        while (i + 1 < nums.length && nums[i] == nums[i + 1]) i++;
        //  All subsets that excludes current element (because it has been popped out from previous code)
        helper(i + 1, slate); // call to next unique num
    }
};
// subsetsWithDup([1, 2, 2]);//?
/* ================================================================================== */
/* 19. LC 17. Letter Combinations of a Phone Number
 - we are mapping numbers to letters, then generating subsets of length of input for each number(each letters of each number).
 - Time: O(4^n.n) - copying 4^n subsets generated of length n max
 - Space: O(4^n.n) - output space - 4^n subsets space of max n length long, call stack - O(n)
*/
var letterCombinations = function (digits) {
    if (digits.length == 0) return [];

    const map = {
        "2": "abc", "3": "def", "4": "ghi", "5": "jkl",
        "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"
    };

    const res = [];
    backtrack(0, []);
    return res;

    function backtrack(i, slate) {
        if (i === digits.length) {
            res.push(slate.join(""));
            return;
        }
        const currentDigit = digits[i];
        const currentLetters = map[currentDigit];
        for (const letter of currentLetters) {
            slate.push(letter); //inclusion of each letter
            backtrack(i + 1, slate);
            slate.pop(); //exclusion of each letter
        }
    }
}
// letterCombinations("23")//?
/* ================================================================================== */
/* 20. LC 77. Combinations
 - here we need to generate subsets of numbers from 1 to n of length k
 - Time: O(C(n,k)) - copying n choose k length of subsets generated.
 - Space: O(C(n,k)) - output space - n choose k length subsets space, call stack - O(k)
*/
var combine = function (n, k) {
    const res = [];
    helper(1, n, []);
    return res;

    function helper(start, n, slate) {
        if (slate.length == k) { // backtrack
            res.push([...slate]);
            return;
        }
        if (start == n + 1) return; // base case
        helper(start + 1, n, slate); //exclude
        
        slate.push(start); //include
        helper(start + 1, n, slate);
        slate.pop();
    }
};
// combine(4, 2); //?
/* ================================================================================== */
/* 21. LC 39. Combination Sum
 - here we need to generate subsets of numbers from candidates array to match the target, but each number can be used more than once in a subset. output shouldn't have duplicate subsets.
 - Time: O(N^T/M)- maximal number of nodes in N-ary tree of T/M height.
 - Space: O(T/M) - call stack space
*/
var combinationSum = function(candidates, target) {
    const res = [];
    helper(0, [], target);
    return res;

    function helper(i, slate, remaining){ 
        // const sum = slate.length ? slate.reduce((a,b) => a+b): 0;
        if(remaining < 0) return; // backtrack
        if(remaining == 0){
            res.push([...slate]);
            return;
        }

        for(let pick = i; pick < candidates.length; pick++){
            slate.push(candidates[pick]);
            helper(pick, slate, remaining - candidates[pick]); // send pick in helper to send the same number n times
            slate.pop();
        }
    }
};
// combinationSum([2,3,6,7], 7); //?

/* ================================================================================== */
/* 22. LC 40. Combination Sum 2
- here we need to generate unique subsets of given numbers that sums up to target, 
- so first sort the input and make inlcusion choices for all and exclusion choice for only unique numbers.
- Time: O(2^n.n)- copying/  cloning 2^n subsets of max n length.
- Space: O(2^n.n) - out space -O(2^n*n) -> 2^n subsets of n length call stack space -> O(n)
*/
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b) => a-b);
    const res = [];
    helper(0, [], target);
    return res;
    function helper(i, slate, remaining){
        if(remaining < 0 || i > candidates.length ) return;
        if(remaining == 0){
            res.push([...slate]);
            return;
        }
        slate.push(candidates[i]);
        helper(i+1, slate, remaining - candidates[i]); // include all
        slate.pop();
        while( i <= candidates.length && candidates[i] == candidates[i+1]) i++;
        helper(i+1, slate, remaining); // exclude only unique nums
    }
};
//  combinationSum2([3,1,3,5,1,1], 8)//?
/* ===============================  IK test question   ======================================== */
/* 23. LC 22. Generate Parentheses
- here we need to generate valid permutations of brackets of 2*n length, in order that opening should be followed by closing 
- so we need to keep track of opening count and closing count after adding them to slate.
- Time: O(4^n/squareroot of n)- because its generating 2 times the n length of string
- Space: O(4^n/squareroot of n) - output space, call stack space -> O(n)
*/
var generateParenthesis = function (n) { //permute
    const res = [];
    helper([], n, n);
    return res;

    function helper(slate, openCount, closeCount) {
        if (closeCount < openCount || openCount < 0 || closeCount < 0) return; // backtrack if invalid or exceeds length
        if (openCount == 0 && closeCount == 0) { // valid
            res.push([...slate].join(''));
            return;
        }
        slate.push('('); // include (
        helper(slate, openCount - 1, closeCount);
        slate.pop();

        slate.push(')'); // include )
        helper(slate, openCount, closeCount - 1);
        slate.pop();
    }
};
/* ================================================================================== */
/* 24. LC 131. Palindrome Partitioning
- here we need to generate valid subsets of given str (substrings) that is palindrome
- so we need to keep adding substrings to the slate and check if the last added one is a palindrome or not, if not then backtrack
- Time: O(2^n.n) - copying 2^n substring of n length max
- Space: O(2^n.n) - output space- 2^n.n, aux- n^2 (2D array of substring),  call stack space -> O(n)
*/
var partition = function (s) {
    const res = [];
    helper(0, []);
    return res;

    function helper(i, slate) {
        if (slate.length > 0 && !isPalindrome(slate[slate.length - 1])) return;
        if (i == s.length) {
            res.push([...slate]);
            return
        }
        for (let pick = i; pick < s.length; pick++) {
            slate.push(s.slice(i, pick + 1));
            helper(pick + 1, slate);
            slate.pop();
        }
    }

    function isPalindrome(str) {
        let j = str.length - 1;
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== str[j]) return false;
            j--;
        }
        return true;
    }
};
// partition("abc");

/* ===============================  IK test question - Recursion  ======================================== */
/* 25. check if possible Sum - return true or false
- here we need to check if there is any non empty subsets that sums to given k value.
- so we need to keep track of non empty subsets.
- Time: O(2^n)- as there will be 2^n node in the whole recurive tree in total, but all are doing contant work. 
- Space: O(n) - call stack space - height of recursive tree
*/
function check_if_sum_possible(arr, k) {
    return helper(0, k, [], true);

    function helper(i, remaining, isEmpty) {
        if (remaining == 0 && !isEmpty) { // don't need to go all the way to arr.length is sum is alredy there
            return true;
        }
        if (i == arr.length) return false;

        if(helper(i + 1, remaining - arr[i], false)) return true; // inclusion so there won't be empty subsets here so sending false

        if(helper(i + 1, remaining, isEmpty)) return true; // exclusion;

        return false;
        // or one line:  return helper(i + 1, remaining - arr[i], false) || helper(i + 1, remaining, isEmpty);
    }
}
// check_if_sum_possible([1,2,3], 0)//?

/* ================================================================================== */
/*                         live class Trees                                       */
/* ================================================================================== */

/* BFS traversals */

/* 26. LC 102.Binary Tree Level Order Traversal
* we have to do inner loop for each level to store values in 2D array with node's at each level
time: O(n) (for js array it would be O(n^2) time as we are shift the node which takes O(n) time), space: O(n)
*     ========      BFS traversal Template      ==========  */
var levelOrder = function (root) {
    if (!root) return []; // return default value

    const q = [root]; // initialize Queue() with root in it.
    const res = [];

    while (q.length) {
        let len = q.length, temp = [];
        // for array of array - level order arrays
        while (len--) { // run until q's length
            let node = q.shift(); // take out the first node from the q
            temp.push(node.val);
            if (node.left) q.push(node.left); // push its left child
            if (node.right) q.push(node.right); // push its right child
        }
        res.push(temp);
    }
    return res;
};

/* 27. LC 429. N-ary Tree Level Order Traversal
* there can be n children of each node at any level so at each level we need to do for loop to add all nodes at that level
time: O(n), space: O(n) */
var levelOrder = function (root) {
    if (!root) return [];
    const res = [];
    const q = [root];
    while (q.length) {
        const temp = [];
        let len = q.length;
        while (len--) {
            let node = q.shift();
            temp.push(node?.val);
            for (let i = 0; i < node?.children?.length; i++) {
                if (node?.children[i]) q.push(node?.children[i]);
            }
        }
        res.push(temp);
    }
    return res;
};

/* 28. LC 107. Binary Tree Level Order Traversal II
* we just have to reverse the result array to output bottom to top level order nodes
time: O(n), space: O(n) */
var levelOrderBottom = function (root) {
    if (!root) return [];
    const q = [root], res = [];
    while (q.length) {
        const temp = [];
        let len = q.length;
        while (len--) {
            const node = q.shift();
            temp.push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        res.push(temp);
    }
    return res.reverse(); // reverse the output array
};

/* 29. LC 199. Binary Tree Right Side View
* keep updating the value (in inner loop) to be pushed in res
Time: O(n) Space: O(n) */
var rightSideView = function (root) {
    if (!root) return [];
    const q = [root], res = [];
    while (q.length) {
        let len = q.length, val;
        while (len--) {
            const node = q.shift();
            val = node.val; // keep updating val to the rightest node per level
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        res.push(val); // pushing the right node of each level
    }
    return res;
};

/* 30. LC 103. Binary Tree Zigzag Level Order Traversal
- we need to reverse inner array (temp) at alternate level, so we can keep a track of bool and update it at alternate level.
Time: O(n) Space: O(n) */
var zigzagLevelOrder = function (root) {
    if (!root) return [];
    const q = [root], res = [];
    let reverse = false; //flag to reverse the temp at alternate level
    while (q.length) {
        let len = q.length, temp = [];
        while (len--) {
            const node = q.shift();
            temp.push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        if (reverse) temp = temp.reverse();
        res.push(temp);
        reverse = !reverse; // toggle flag at each level after pushing temp to res.
    }
    return res;
};

/*   ===============             DFS traversals            ======================   */

/*        1. Top down DFS traversals */

/* 31. LC 112. Path Sum
Time: O(n) Space: O(n) - stack space - unbalanced BT.
 * ======     Top down DFS traversal Template      =========  */

var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    let res = false;
    dfs(root, targetSum);
    return res;

    function dfs(node, target) {
        if (!node.left && !node.right) { //leaf node
            if (target == node.val) res = true;
            return;
        }
        if (node.left) dfs(node.left, target - node.val);
        if (node.right) dfs(node.right, target - node.val);
    }
};

/* 32. LC 113. Path Sum II
- we need to add all path nodes and at leaf node we need to copy thods nodes along with leaf node to result array, remeber to pop those path nodes while returning
Unbalanced BT: Time: O(n^2)->n leaf nodes copying log n path nodes(height), space: call stack O(n), output O(n^2) - height(n) * breadth/leaf nodes (n) 
Balanced BT: Time: O(n log n) , space: call stack O(log n), output O(n log n) - height(log n) * breadth/leaf nodes (n)  */
var pathSum = function (root, targetSum) {
    if (!root) return [];
    const res = [];
    dfs(root, targetSum, []);
    return res;

    function dfs(node, target, pathNodes) {
        if (!node.left && !node.right) {
            if (target == node.val) {
                res.push([...pathNodes, node.val]); // copying leaf node with other path nodes to res.
            }
            return;
        }
        pathNodes.push(node.val); // pushing curr node to the path nodes
        if (node.left) dfs(node.left, target - node.val, pathNodes);
        if (node.right) dfs(node.right, target - node.val, pathNodes);
        pathNodes.pop(); // wiping off curr node so upper level gets clean slate to push their node.
    }
};

/*          2.  Bottom up DFS traversals           */

/*  33. LC 543. Diameter of Binary Tree
Gobal problem: Find the diameter of the whole tree
Local (per-node) problem: Find the longest inverted-V shaped path of the node.
Local -> Global: Global solution is the max of all the local solutions
To get the local solution, each node needs to the height of their left and right subtree.
Time: O(n) Space: call stack O(n)
*/

/*       ===========      bottom up DFS traversal Template    ============   */ 

var diameterOfBinaryTree = function (root) {
    if (!root) return 0;
    let globalDia = 0;
    dfs(root);
    return globalDia;

    function dfs(node) {
        if (!node.left && !node.right) return 1;
        let left = 0, right = 0;
        if (node.left) left = dfs(node.left);
        if (node.right) right = dfs(node.right);
        const localDia = left + right;
        globalDia = Math.max(localDia, globalDia); // update global result if local result is more.
        return Math.max(left, right) + 1; // returning my own height
    }
};

/* 34. LC 250. Count Univalue Subtrees
- compute local solution, with that answer computute global solution, return local solution
Time: O(n)  Space: O(n) */
function countUnivalSubtrees(root) {
    if (!root) return 0;
    const globalCount = 0;
    dfs(root);
    return globalCount;

    function dfs(node) {
        let isUnival = true;
        if (!node.left && !node.right) {
            globalCount++; // leaf is always unival
            return true;
        }
        if (node.left) {
            const isLeftUnival = dfs(node.left);
            if (!isLeftUnival || node.val !== node.left.val) isUnival = false; // Computing my unival
        }
        if (node.right) {
            const isRightUnival = dfs(node.right);
            if (!isRightUnival || node.val !== node.right.val) isUnival = false; // Computing my unival
        }
        if (isUnival) globalCount++; // Adding to global count

        return isUnival; // passing it to parent.
    }
}

/*            =============         Tree Construction             ======================          */

/* 1. Top Down Tree Construction - Root -> left subtree -> right subtree */

/* 35. LC 108. Convert Sorted Array to Binary Search Tree
- use In order contruction, create subroot then attach left and right and then return subroot(top down construction)
- we need to send start and end index to dfs and then calculate mid each time and create a subroot of that mid value.
Time: O(n), space: output(tree)- O(n), call stack - O(log n) - height of AVL BST. */
// Also Trees IK test question 

/*    ============    Top down tree construction template      ==============     */

var sortedArrayToBST = function (nums) {
    return dfs(0, nums.length - 1);
    function dfs(start, end) {
        if (start > end) return null; //base case
        if (start == end) return new TreeNode(nums[start]); //leaf node
        let mid = Math.floor((start + end) / 2);
        let subRoot = new TreeNode(nums[mid]); // Build subTree root
        subRoot.left = dfs(start, mid - 1); // build left substree
        subRoot.right = dfs(mid + 1, end); // build right subtree
        return subRoot; // return subRoot
    }
};

/* Trees - IK problem set 1 */

/* 36. LC 98. Validate Binary Search Tree 
- Here just checking if left is less and right is more than root won't work
- we also have to check if the right is more than its parent but still less than the root/ ancestor
- to do this we have to send min and max number to compare each node with.
Time: O(n), space: O(n)- call stack
*/
var isValidBST = function(root) {
    if (!root) return false;
    return dfs(root, -Infinity, Infinity);

    function dfs(node, min, max) {
        if (!node.left && !node.right) {
            if (node.val >= max || node.val <= min) return false;
            return true;
        }
        let IamBST = true;
        if (node.left){
            left = dfs(node.left, min, node.val); // send node.val as max
            if(!left || node.val >= max) IamBST = false; //compare node's val with max
        } 
        if (node.right){
            right = dfs(node.right, node.val, max); // send node.val as min
            if(!right || node.val <= min) IamBST = false; //compare node's val with min
        } 
        return IamBST; // return local solution
    }
};

/* 37. LC 257. Binary Tree Paths
 return all nodes in each path in BT -> return array of strings (node's val as string)
 Unbalanced Tree: Time: O(n^2), space: output - O(n^2), stack - O(n)
 Balanced Tree: Time: O(n log n), space: output - O(n log n), stack - O(log n)
 */
var binaryTreePaths = function(root) {
    if(!root) return [];
    let res = [];
    dfs(root, []);
    return res;
    
    function dfs(node, slate){
        if(!node.left && !node.right){
            res.push([...slate, node.val].join('->'));
            return;
        }
        slate.push(node.val);
        if(node.left) dfs(node.left, slate);
        if(node.right) dfs(node.right, slate);
        slate.pop();
    }
};
/* 38. LC 156. Binary Tree Upside Down
 turn the tree upside down and return the new root (left leaf)
 Time: O(n), space: stack - O(n)
- if done in BFS, Time: O(n), Space: O(1) because in Queue there will only be one element at a time i.e left child 
 */
var upsideDownBinaryTree = function(root) {
    if(!root) return null;
    let newRoot = null;
    dfs(root, null, null);
    return newRoot;
    
    function dfs(node, parent, rightSibling){
        let [prevLeft, prevRight] = [node.left, node.right]
        node.left = rightSibling;
        node.right = parent;
        // if its the leaf node, make it as new root (leaf will be found in left side)
        if(!prevLeft && !prevRight) newRoot = node;  
        if(prevLeft) dfs(prevLeft, node, prevRight); // traverse only through left as the tree barnch grows only on left, right node is just dead end for each subtree
    }
};
/* 39. LC 617. Merge Two Binary Trees
 Time: O(m), space: stack - O(m) where m is the minium length/depth of tree because we traverse only until both the tree has nodes, otherwise we just return the other tree to be attached to the tree1.
 m represents the minimum number of nodes from the two given trees
*/
var mergeTrees = function(root1, root2) {
    return dfs(root1, root2);

    function dfs(node1, node2){
        if(!node1 && !node2) return null;
        if(!node1 || !node2) return node1 || node2; // return whichever tree has nodes
        // below code will execute only when both the nodes are there
        node1.val += node2.val; // upadting node1's value (merging tree2 in tree1)
        node1.left = dfs(node1.left, node2.left);
        node1.right = dfs(node1.right, node2.right);

        return node1;
    }
};

/* 40. IK Question: Merge Two Binary Search Trees (BST)
- Here we solve this in 3 steps: 
1. In order traversal of both trees(to store node's val in sorted array)
2. merge both the Inorder traversed arrays in a sorted merged array
3. create a BST from a sorted array.
 Time: O(m+n), space:  O(m+n) - where m is the no. of nodes in root1, and n is no. of nodes in root2
*/
function merge_two_binary_search_trees(root1, root2) {
    let arr1 = inOrder(root1), arr2 = inOrder(root2);
    let mergedArr = merge(arr1, arr2);
    return dfs(0, mergedArr.length - 1)

    function dfs(start, end) { // 3. create a BST from a sorted array. (top down construction)
        if (start > end) return null;
        if (start == end) return new BinaryTreeNode(mergedArr[start]);
        let mid = Math.floor((start + end) / 2);
        let newsubRoot = new BinaryTreeNode(mergedArr[mid]);
        newsubRoot.left = dfs(start, mid - 1);
        newsubRoot.right = dfs(mid + 1, end);
        return newsubRoot;
    }
    function merge(arr1, arr2) { // 2. merge two sorted arrays
        let res = [], i = 0, j = 0;
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] <= arr2[j]) res.push(arr1[i++]);
            else res.push(arr2[j++]);
        }
        while (i < arr1.length) res.push(arr1[i++]);
        while (j < arr2.length) res.push(arr2[j++]);
        return res;
    }
    function inOrder(node) { // 1. return in order traversed array.
        if (!node) return [];
        return [...inOrder(node.left), node.value, ...inOrder(node.right)];
    }
}

/* 41. LC 426. Convert Binary Search Tree to Sorted Doubly Linked List
- Here we keep track of previous node to make it circular, and assign head to the leftest node and circle them again with tail/previous
Time: O(n), space: call stack - O(n) for unbalanced tree or O(log n) for balanced tree.
*/
var treeToDoublyList = function(root) {
    if(!root) return null;
    let head, previous;
    inOrderDFS(root);
    head.left = previous; // make head and tail circular
    previous.right = head;
    return head;

    function inOrderDFS(node){
        if(!node) return;
        if(node.left)inOrderDFS(node.left); // first all the way to left as we are doing in order traversal

        if(!head) head = node; // make the leafest node of the tree as head
        if(previous){ // make it circular
            previous.right = node;
            node.left = previous;
        }
        previous = node; // update previous node for next node
        if(node.right)inOrderDFS(node.right);
    }
};
 
/* 42. LC 236. Lowest Common Ancestor of a Binary Tree
- Bottom up DFS as we need to know from each nodes from leaf if p or q was found in that subtree, if yes then we check for other res
- if global res is not there and if we find res, then we update it as it is the first common ancestor that we need to find
Time: O(n), space: call stack - O(n) for unbalanced tree or O(log n) for balanced tree.
*/
var lowestCommonAncestor = function(root, p, q) {
    let res = null;
    dfs(root);
    return res;
    function dfs(node){
        let localRes = false
        if(!node.left && !node.right){
            if(node.val == p.val || node.val == q.val) localRes = true;
         return localRes;
        }
        let left, right;
        if(node.left)left =  dfs(node.left);
        if(node.right) right = dfs(node.right);
        
        if(!res){ // update global result only when its null as we need to returm first common ansector from below
            if(left && right) res = node;
            if((left || right) && (node.val == p.val || node.val == q.val))  res = node;
        }

        if(node.val == p.val || node.val == q.val) localRes = true;

        return localRes || left || right; // return local res (true if any of these is true or false)
    }
};
/* ===============================  IK test question - Trees  ======================================== */

/* 43. LC 230. Kth Smallest Element in a BST
* - here we make in oredr traversal as it can set sorted results of nodes, but instead of push those values in an array we just keep track of i so we save on that extra array space that is not needed.
    Time: O(n), space: call stack O(n) in unbalanced tree and O(log n) in balanced tree
 */
var kthSmallestBST = function(root, k) {
    let res; i = 0;
    dfs(root);
    return res;

    function dfs(node){
        if(!node) return; 
        if(node.left) dfs(node.left);
        i++; // incrementing i in inOrder traversal
        if(k == i) res = node.val;
        if(node.right) dfs(node.right)
    }
};

/* 44. Height Of A N-ary Tree - IK question
Given a tree, find its height: number of edges in the longest path from the root to any node.
- we use top down approach where we return local res, and with that values we upadte global res.
Time: O(n), space O(n)
*/
function find_height(root) {
    if(!root) return 0;
    let globalCount = 0;
    dfs(root);
    return globalCount;
    
    function dfs(node){
        if(!node.children || node.children.length <= 0) return 1; // leaf
        
        let localRes = 0;
        for(let i = 0; i < node.children.length; i++){ // traversing through n children
            let child = node.children[i];
            let childRes = dfs(child);
            if(childRes > localRes) localRes = childRes;
        }
        globalCount = Math.max(globalCount, localRes); // updating global res if localRes is more than global
        return localRes+1; // returning my height as local res
    }
}

/* ================================================================================== */
/*                                  Linked Lists                                      */
/* ================================================================================== */
/* ==============             IK Foundation - by Murali         ================== */
/* 45. LC 141. Linked List Cycle
Floyd's Cycle detection ( fast and slow pointer pattern) 
there are many variants of fast and slow, where slow starts from first node and goes a step at a time, 
 - where fast can start from first node or skipped to any point and then move with slow or even faster than slow everytime.
*/
var hasCycle = function(head) {
    let slow = head, fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast) return true;
    }
    return false;
};
/* ==============             IK Class Live         ================== */
 
/* 45. LC 146. LRU Cache- this can be easily done using map in JS because we can use .next() to map.keys()
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
Time: O(1), space: O(n) - linked list/ Map
*/

/* Using LL */
class LRUCache {
   constructor(capacity) {
       this.capacity = capacity;
       this.cache = new Map();
       this.head = { key: 'head' };
       this.tail = { key: 'tail' };
       this.head.next = this.tail;
       this.tail.prev = this.head;
   }

   get(key) {
       if (this.cache.has(key)) {
           const node = this.cache.get(key);
           this.moveToHead(node);
           return node.value;
       }
       return -1;
   }

   put(key, value) {
       if (this.cache.has(key)) {
           const node = this.cache.get(key);
           node.value = value;
           this.moveToHead(node);
       } else {
           if (this.cache.size >= this.capacity) {
               const removed = this.removeTail();
               this.cache.delete(removed.key);
           }
           const newNode = { key: key, value: value };
           this.addToHead(newNode);
           this.cache.set(key, newNode);
       }
   }

   moveToHead(node) {
       this.removeNode(node);
       this.addToHead(node);
   }

   removeTail() {
       const tail = this.tail.prev;
       this.removeNode(tail);
       return tail;
   }

   removeNode(node) {
       const prevNode = node.prev;
       const nextNode = node.next;
       prevNode.next = nextNode;
       nextNode.prev = prevNode;
   }

   addToHead(node) {
       const oldHead = this.head.next;
       node.next = oldHead;
       oldHead.prev = node;
       node.prev = this.head;
       this.head.next = node;
   }
}
/* using Map */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.get = function (key) {
        let isKey = this.map.has(key);
        if (isKey) {
            const value = this.map.get(key);
            this.map.delete(key);
            this.map.set(key, value);
            return value;
        }
        return -1;
    };
    this.put = function (key, value) {
        if (this.map.has(key)) {
            this.map.delete(key);
        } else if (this.capacity <= this.map.size) {
            let firstKey = this.map.keys().next().value; // this is magic- .next() will give the first item from the map as value
            this.map.delete(firstKey);
        }
        this.map.set(key, value);
    };

};

/* ==========        IK LL pratice problem set       ============== */


/* 55. LC 876. Middle of the Linked List 
- using fast and slow pointer, as when fast pointer reaches the end, slow will be at the middle, 
because fast is running twice the speed of slow.
Time: O(n), space : O(1)
*/
var middleNode = function(head) {
    let fast = head, slow = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

/* 56. LC 1721. Swapping Nodes in a Linked List
- Two pointers: first and last, when at k len- update first and last to currNode, keep iterating and updating last until the end of list, 
last will point at len-k (from back), then merge its val.
Time: O(n), space: O(1)
*/
var swapNodes = function(head, k) {
    let first = null, end = null, curr = head, len = 0;
    while(curr){
        len++;
        if(end) end = end.next; // end will be at kth from back at the end of traversal
        if(len == k){
            end = head;
            first = curr;
        }
        curr = curr.next;
    }
    let fval = first.val;
    first.val = end.val; // swapping values of both nodes
    end.val = fval;
    return head;
};

/* 57. LC 19. Remove Nth Node From End of List 
using fast and slow two pointer - fast will start from n to the end of list, slow will move forward with fast,
when fast finished traversing, slow will be at the nth-1 node so we can easily point its next to its next.next.
for slow to stop one node behind the nth, we have to add an extra dummy node at the start of the node.
time: O(n), space : O(1)
*/
var removeNthFromEnd = function(head, n) {
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    let slow = dummyHead, fast = dummyHead;
    for(let i = 1; i <= n+1; i++){
        fast = fast.next;
    }
    while(fast){
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next 
    return dummyHead.next;
};

/* ==========        IK LL Floaters sessions Problem - by Omkar       ============== */
/* === Floater Session 2 - Insertion and Deletion  === */

/* 58. LC 707. Design Linked List.
 Insertion and deletion of nodes in Linked List at index, head, tail.
 Time: addAtHead - O(1), get, addAtIndex, deleteAtIndex - O(index), addAtTail - O(n),  space : O(n) - Linked List space
*/
function ListNode (val, next){
    this.val = val !== undefined ? val : null;
    this.next = next !== undefined ? next : null;        
}

var MyLinkedList = function() {
    this.head = null;
    this.tail = null;
};

MyLinkedList.prototype.get = function(index) {
    let curr = this.head, i = 0;
    while(curr && i !== index){
        curr = curr.next;
        i++;
    }
    return curr ? curr.val : -1;
};

MyLinkedList.prototype.addAtHead = function(val) {
    let node = new ListNode(val);
    node.next = this.head;
    this.head = node;
    if(!this.tail) this.tail = node;
};

MyLinkedList.prototype.addAtTail = function(val) {
    let node = new ListNode(val);
    if(!this.head && !this.tail){ // if its first val to be added in the LL
        this.head = node;
        this.tail = node;
        return;
    } 
    this.tail.next = node; // add new node at end
    this.tail = node; // update tail with the new node that has been added
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
    let dummy = new ListNode(null, this.head);
    let curr = this.head, pred = dummy, i = 0;
    while(curr && i !== index){
        pred = curr;
        curr = curr.next;
        i++;
    }
    if(index == i){ 
        let node = new ListNode(val, curr);
        pred.next = node;        
        if(!curr) this.tail = node; // updating the tail If the index is beyond the current length of the list.
    }
    this.head = dummy.next; // update head
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index == 0){
        if(this.tail == this.head) this.tail = this.tail.next; // if only one node present
        this.head = this.head.next;
        return;
    }
    let dummy = new ListNode(null, this.head);
    let curr = this.head, pred = dummy, i = 0;
    while(curr && i !== index){
        pred = curr;
        curr = curr.next;
        i++;
    }
    if(curr) pred.next = curr.next; //delete / update

    this.head = dummy.next; // update head
    if(this.tail == curr) this.tail = pred; // if it was the last node(tail) that was deleted
};

/* 59. LC. 237. Delete Node in a Linked List
- copy the value of next node to the given node and delete the next node.
    Time: O(1)
*/
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
/* 60. 203. Remove Linked List Elements
Time: O(n), space: O(1)
 */
var removeElements = function(head, val) {
    let dummy = new ListNode(null, head);
    let pred = dummy, node = head;
    while(node){
        if(val === node.val){
            pred.next = node.next;
            node = node.next;
        } else {
            node = node.next;
            pred = pred.next;       
        }
    }
    return dummy.next;
};



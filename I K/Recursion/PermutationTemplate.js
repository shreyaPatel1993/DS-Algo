/*  generate all permutations.
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
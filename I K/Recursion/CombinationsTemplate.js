/* Subsets - generate all subsets of unique n nums
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
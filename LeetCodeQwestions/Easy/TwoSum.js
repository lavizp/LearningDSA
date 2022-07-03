//https://leetcode.com/problems/two-sum/submissions/

var twoSum = function(nums, target) {
    for(var i =0; i < nums.length; i++)
    {
        for(var j = i +1; j < nums.length; j++)
        {
            if(nums[i] + nums[j] == target) 
            {
                var x  = [i,j];
                return x;
            }
        }
    }
    return 0;
};
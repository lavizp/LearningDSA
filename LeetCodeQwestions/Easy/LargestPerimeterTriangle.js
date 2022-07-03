
//https://leetcode.com/problems/largest-perimeter-triangle/submissions/

var largestPerimeter = function(nums) {
    let per = 0;
     nums.sort((a,b) => b-a);
     for(let i = 0; i <nums.length - 2; i++)
     {
         if(nums[i] < nums[i+1] + nums[i+2])
         {
             per = nums[i] + nums[i+1] + nums[i+2];
             return per;
         }
     }
     return 0;
 };
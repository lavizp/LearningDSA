namespace LeetCodeQwestions.Easy
{
    public class Maximum_Subarray
    {
            public int MaxSubArray(int[] nums) 
    {
        int prev_max = 0;
        int global_max = nums[0];

        
        for(int i = 0; i < nums.Length; i++)
        {
            prev_max += nums[i];
            
            if(nums[i] > prev_max) prev_max = nums[i];
            if(prev_max > global_max) global_max = prev_max;

            
        }
        return global_max;
    }
    }
}
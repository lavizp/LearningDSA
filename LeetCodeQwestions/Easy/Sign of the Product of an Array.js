//https://leetcode.com/problems/sign-of-the-product-of-an-array/


 var arraySign = function(nums) {
    let product = 1;
    for(const i of nums)
    {
        product *= i;
    }
    if(product > 0) return 1;
    if(product < 0) return -1;
    return 0;
};
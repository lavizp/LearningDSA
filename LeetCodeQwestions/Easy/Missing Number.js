var missingNumber = function(nums) {
    for(let i = 0; i <=nums.length; i++ )
    {
        if(!nums.includes(i))
        {
            return i;
        }
    }
    return null;

};

a = [9,6,4,2,3,5,7,0,1];
console.log(missingNumber(a));
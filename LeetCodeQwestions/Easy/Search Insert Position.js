var searchInsert = function(nums, target) {
    let beg = 0;
    let end = nums.length - 1;
    let mid = 0;
    while(beg<=end)
    {
        mid = Math.round((beg + end)/2)
        let numMid = nums[mid]
        if(numMid == target) return mid;
        if(target > numMid)
        {
            beg = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return beg;
};

let l =[1,3,5,6];
console.log(searchInsert(l,4));
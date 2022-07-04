//https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/


var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b) => b-a);
    let diff = arr[0] - arr[1];
    for(let i = 1; i< arr.length; i++)
    {
        if(arr[i-1] - arr[i] !== diff) return false;
    }
    return true;
};
// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/submissions/


var subtractProductAndSum = function(n) {
    n = n.toString();
    let _sum = 0;
    let _product = 1;
    for(let i = 0; i < n.length; i++)
    {
        let x = parseInt(n[i]);
        _sum += x;
        _product *= x;
    }
    return( _product - _sum);
};
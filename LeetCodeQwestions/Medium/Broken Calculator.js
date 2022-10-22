//https://leetcode.com/problems/broken-calculator/

let count = 0;
var brokenCalc = function(startValue, target) {
    if (startValue >= target) return startValue-target;
    if (target % 2 == 0) return 1 + brokenCalc(startValue, target/2);
    else return 1 + brokenCalc(startValue, target + 1);
};
let a = brokenCalc(5,8);
console.log(a);
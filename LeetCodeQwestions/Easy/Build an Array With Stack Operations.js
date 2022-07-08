//https://leetcode.com/problems/build-an-array-with-stack-operations/

var buildArray = function(target, n) {

    let res = [], j = 1;
    for (let i = 0; i < target.length; i++) {
        if (target[i] === j) res.push("Push");
        else {
            res.push("Push", "Pop");
            i--;
        }
        j++;
    }
    return res;
};
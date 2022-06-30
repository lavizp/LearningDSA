//https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/

var average = function(salary) {
    let min = Infinity;
    let max = -Infinity;
    let total = 0;
    let count = salary.length;
    for(const i of salary)
    {
        if(i > max) {max =i};
        if(i < min) min =i;
        total += i;

    }
    total -= min;
    total -= max;
    let returna = total/(count-2);
    return returna; 
};
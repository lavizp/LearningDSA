// https://leetcode.com/problems/number-of-1-bits/


var hammingWeight = function(n) {
    let answer = 0;
    n = n.toString(2);
    for(let i = 0; i < n.length; i++)
    {
        if(n[i] == 1)
        {
             answer++;   
        }
    }
  
  return answer;
};
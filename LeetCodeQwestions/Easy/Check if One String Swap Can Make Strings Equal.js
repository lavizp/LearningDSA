//https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/

var areAlmostEqual = function (s1, s2) {
    let a = 0;
      let diffs = [];
  
    if (s1 === s2) {
      return true;
    }
  
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        a++;
          diffs.push(i);
      }
      if (!s2.includes(s1[i])) {
        return false;
      }
        
    }
      if(a == 2)
      {
          if(s1[diffs[0]] != s2[diffs[1]]) return false;
      }
  
    return a === 2;
  };
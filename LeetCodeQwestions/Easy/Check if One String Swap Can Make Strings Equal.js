s1 = "abcd";
s2 = "dcba";


var areAlmostEqual = function(s1, s2) {
    if( s1.length !== s2.length) return false;
    let numofChanges = 0;
    for(let i = 0; i < s1.length; i++)
    {
        c = s1[i];
        if(!s2.includes(c)) return false;
        if(c != s2[i]) numofChanges++;
        if(numofChanges > 1) return false;
    }
    return true;
};

console.log(areAlmostEqual(s1,s2));
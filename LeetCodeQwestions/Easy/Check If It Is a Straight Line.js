var slopeFunc = function(c1,c2) {
    return(Math.abs((c1[1] -c2[1])/(c1[0] - c2[0])));
};

var checkStraightLine = function(coordinates) {
    var _slope = Math.abs(slopeFunc(coordinates[0],coordinates[1]));
    if(_slope === -Infinity) _slope = Infinity;

    console.log(_slope);
    for(let i = 1;i < coordinates.length - 1; i++)
    {
        console.log(slopeFunc(coordinates[i],coordinates[i+1]));
        var slp = slopeFunc(coordinates[i],coordinates[i+1]);
        if(slp === -Infinity) slp = Infinity;
        if(slp !== _slope) return false;

    }
    return true;
};

var coord = [[0,0],[0,1],[0,-1]];
console.log(checkStraightLine(coord));


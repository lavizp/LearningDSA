var minTimeToVisitAllPoints = function(points) {
    let totalDistance = 0;
    for(let i = 0; i< points.length - 1; i++)
    {
        totalDistance += GetDistance(points[i], points[i+1]);
        
    }
    return totalDistance;
};

var GetDistance = function(x,y)
{

    let dis = 0;
    let xdis = Math.abs(x[0] - y[0]);
    let ydis = Math.abs(x[1] - y[1]);
   
    dis = (xdis > ydis)? xdis : ydis;
    return dis;
}

console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]));
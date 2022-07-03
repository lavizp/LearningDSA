//https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/submissions/


 var nearestValidPoint = function(x, y, points) {
    //if(points.length == 1 && (points[0][0] == x && points[0][1] == y)) return 0;
    let xas = 0;
    for(let i = 0; i< points.length; i++)
    {
        
        if((points[i][0] == x && points[i][1] == y)) return i;
    }

    let distance = 10000;
    let filteredPoints = points.filter(filter =>{
        if(filter[0] == x || filter[1] ==y)
    {
        if(!(filter[0] == x && filter[1] == y)){
            return filter;
        }

    }
    })
    let return_index = 0;
    for(let i = 0; i < filteredPoints.length; i++)
    {
        
        let temp_dis = ManhattanDistance(x,y,filteredPoints[i][0],filteredPoints[i][1]);
        if(temp_dis < distance) 
        {
            distance =  temp_dis;
            return_index = filteredPoints[i];
        }
    }
    return points.indexOf(return_index);
    
};

function ManhattanDistance(x,y,x2,y2) {
    let distance = Math.abs(x-x2) + Math.abs(y-y2);
    return distance;
}



function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? 1 : -1;
    }
}
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort(compareSecondColumn)
    console.log(boxTypes);

    var result = 0;
    var numOfBox = 0;
    for(let i = 0; i < boxTypes.length; i++)
    {
        var check = numOfBox + boxTypes[i][0];
        if(check >= truckSize)
        {
            for(let j = 0;j < boxTypes[i][0];j++)
            {

                numOfBox++;
                result += boxTypes[i][1];
                if(numOfBox == truckSize) return result;

            }
        }
        result += boxTypes[i][0] * boxTypes[i][1];
        numOfBox += boxTypes[i][0];


    }
    return result;
};
var  a =[[4,2],[5,5],[4,1],[1,4],[2,5],[1,3],[5,3],[1,5],[5,5],[1,1]];
console.log(maximumUnits(a,24));
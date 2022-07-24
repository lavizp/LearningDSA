var countPoints = function(rings) {
    const arrayOfSticks = Array.from(Array(10), () => []);
    let answer = 0;

    for(let i = 0; i < rings.length; i = i+2)
    {
        arrayOfSticks[(rings[i+1])].push(rings[i]);
        
    }
    for(let i = 0; i < arrayOfSticks.length; i++)
    {
        if(arrayOfSticks[i].includes('R') && arrayOfSticks[i].includes('G') && arrayOfSticks[i].includes('B')) answer++;
        
    }
    return answer;
};

console.log(countPoints("B0B6G0R6R0R6G9"));
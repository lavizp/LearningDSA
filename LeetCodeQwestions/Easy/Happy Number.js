

 var isHappy = function(n) {
    let word = n.toString();
    let arrayofSquares = [];
    while(true){
        word = getSquares(word);
        if(arrayofSquares.includes(word)) return false;
        arrayofSquares.push(word);
        if(word == 1) return true;
        }   
    
};

function getSquares(word)
{
    word = word.toString();

    let sumOfSquares = 0;
    for(let i = 0; i < word.length; i++)
    {
        sumOfSquares += ((word[i]) ** 2 );
    }
    return sumOfSquares.toString();
}

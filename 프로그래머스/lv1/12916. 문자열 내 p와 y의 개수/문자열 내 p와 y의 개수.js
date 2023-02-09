function solution(s){
    var answer = true;
    s = s.toLowerCase();
    countP = 0;
    countY = 0;
    for(word of s)
    {
        if(word === 'p') countP++;
        else if(word==='y') countY++;
    }
    return (countP===countY) ? true : false;
}
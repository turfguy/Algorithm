function solution(left, right) {
    var answer = 0;
    var copyLeft = left;
    
    while(copyLeft<=right)
    {   
        var counter = 0;
        for(var i=1; i<=copyLeft; i++)
        {
            if(copyLeft%i == 0)
            {
                counter+=1
            }
        }
        if(counter%2 == 0)
        {
            answer+=copyLeft
        }
        else
        {
            answer-=copyLeft
        }
        copyLeft++;
    }
    
    return answer;
}
function solution(array, commands) {
    var answer = [];
    for (com of commands)
    {
        var pivot =[]
        for(var i = com[0]-1; i<com[1]; i ++ )
        {
            pivot.push(array[i])
        }
        pivot.sort(function (a, b) {
        return a - b;
        });
        answer.push(pivot[com[2]-1])    
                                               
        
    }
    return answer;
}
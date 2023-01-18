function solution(tickets) {
    let answer = [];
    let result=[];
    let len = tickets.length;
    let visited =[];
    tickets= tickets.sort();
    function dfs(str, count)
    {
        result.push(str);
        
        if (len === count)
        {
            answer = result;   
            return true;
        }
        
        for(var i = 0; i<len ; i++)
        {
            if(!visited[i] && tickets[i][0]===str)
            {
                visited[i] = true;
                if(dfs(tickets[i][1],count+1)) return true;
                visited[i] = false;
            }
        }
        result.pop();
    
        return false;
        
    }
    
    dfs("ICN",0);
    
    return answer;
}
function solution(n, computers) {
    var answer = 0;
    const length = computers.length;
    const visited = Array.from({ length: n }, () => false);
    function dfs(index)
    {
        visited[index] = true;
        for (var j=0; j<length; j++)
        {
            if(computers[index][j]&& !visited[j]) dfs(j);
        }
    }
    for(var i=0; i<length; i++)
    {
        if(!visited[i])
        {
            dfs(i)
            answer++;
        }
    }
    
    return answer;
}
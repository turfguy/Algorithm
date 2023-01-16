function solution(priorities, location) {
    let count = 0;
    while(priorities.length!==0)
    {
        
        if(priorities[0] !== Math.max(...priorities))
        {
            priorities.push(priorities[0]);
            priorities.shift();
            if(location === 0) location = priorities.length-1;
            else location-=1;
        }
        else
        {
            priorities.shift();
            count++; 
            if(location !== 0) location-=1;
            else return count;
            
        }
    }
    return count;
}
function solution(n, lost, reserve) {
    var count = 0;
    var nArray = [];
    for(var i = 0; i<n ; i++)
    {
        nArray[i] = 0
        if(reserve.includes(i+1)) nArray[i]+=1;
        if(lost.includes(i+1))nArray[i]-=1;
      
    }
    for (var j=0; j<n ; j ++)
    {
        if(nArray[j]===-1)
        {
            if(nArray[j-1]===1)
            {
                nArray[j]+=1;
                nArray[j-1]-=1;
                
            }
            else if(nArray[j+1]===1)
            {
                nArray[j]+=1;
                nArray[j+1]-=1;
               
            }
        }
      
    }
    
    for(element of nArray)
        {
            if(element=== 0) count++;
            else if(element===1) count++;
        } 
    return count;
}
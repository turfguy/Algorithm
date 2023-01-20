function solution(d, budget) {
    var answer = 0;
    let array = d.sort((a,b)=> a-b)
    for(element of array)
    {
        if(element<=budget)
        {
            budget-=element;
            answer++;
        }
        else continue;
    }
    return answer;
}
function solution(arr)
{
    var answer = [];
    var stack=[];
    for (var element of arr )
    {
        if(stack.length === 0)
        {
            answer.push(element);
            stack.push(element);
        }
        else
        {
            if(stack[0] === element) continue;
            else
            {
                stack.pop()
                stack.push(element)
                answer.push(element)
            }
        }
        
    }

    return answer;
}
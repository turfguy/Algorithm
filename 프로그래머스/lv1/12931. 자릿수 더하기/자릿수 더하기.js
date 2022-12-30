function solution(n)
{
    var num = String(n);
    var num2 = String(n).length
    var answer = 0;
    for(var i=0; i<num2; i++)
    {
        answer+= parseInt(num[i])
    }
    return answer;
}
function solution(n) {
    var a = [];
    var num = String(n)
    for(var i=0; i<num.length; i++)
    {
        a.push(parseInt(num[i]))
    }
    var answer = a.reverse()
    return answer;
}
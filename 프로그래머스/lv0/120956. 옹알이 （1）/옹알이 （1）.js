function solution(babbling) {
    var answer = 0;
    for (bab of babbling)
    {
     var test = bab.replace(/aya|ye|woo|ma/g,'');
     if (test.length===0)answer++;
    }
    return answer;
}
function solution(s){
    let count = 0;
    if(s.length == 0 || s[0] == ')') return false;
    for(let element of s)
    {
        count += (element ==='(') ? 1 : -1;
        if (count<0) return false;
    }
    return (count==0) ? true : false;
}
function solution(n) {
    var answer = 0;
    var third = n.toString(3);
    var array = [...third];
    var array = array.reverse();
    
    answer =array.join('')
    return parseInt(answer,3);
}
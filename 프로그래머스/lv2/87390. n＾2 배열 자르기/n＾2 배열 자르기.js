function solution(n, left, right) {
    var answer = [];
    for ( var i = left ; i<= right ; i++)
    {
        const row = parseInt(i/n);	// Row
        const col = i%n;	// Column
        answer.push(Math.max(row,col)+1)
    }
    return answer
}
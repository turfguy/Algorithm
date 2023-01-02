function solution(numbers) {
    var pivot = [];
    for (var i=0 ; i< numbers.length; i++ )
    {
        for ( var j=i+1; j<numbers.length; j++)
        {
            pivot.push(numbers[i]+numbers[j])
        }
    }
    const set = new Set(pivot);
    var answer = [...set];
    answer.sort(function (a, b) {
        return a - b;
    });
    return answer;
}
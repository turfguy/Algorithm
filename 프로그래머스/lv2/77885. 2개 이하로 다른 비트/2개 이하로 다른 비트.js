function solution(numbers) {
    var answer = [];
    for(num of numbers)
    {
        if(num%2 == 0)
        {
            answer.push(num+1)
            continue
        }
        var bit = '0'+ num.toString(2)
      
        var firstZero = bit.lastIndexOf('0')
        answer.push
        (parseInt
            (
            `${bit.slice(0, firstZero)}10${bit.slice(firstZero + 2)}`, 2
            )
        )
       
        
    }
    return answer;
}
var dictObject = 
    {}
function solution(numbers) {
    var answer = 0;
    for(var i=0; i<10; i++)
    {
        if(numbers.includes(i)) dictObject[i] = true;
        else dictObject[i] = false;
    }
    for(key in Object.keys(dictObject))
    {
       if(!dictObject[key])
        {
            answer+=parseInt(key)
        }
    }
    return answer;
}
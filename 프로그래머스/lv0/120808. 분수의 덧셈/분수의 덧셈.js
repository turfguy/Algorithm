function solution(denum1, num1, denum2, num2) {
    
    var top = (denum1*num2)+(denum2*num1) //분자
    var bot = (num1*num2) //분모
    var max = 1 
    for (i= 0 ; i<=top; i ++ )
    {
        if((top%i)===0 && (bot%i)===0) // 분자만큼 숫자를 키우면서 최대공약수 찾기
        {
            max = i        
        }
    }
    
    var answer = [(top/max),(bot/max)];
    return answer;
}
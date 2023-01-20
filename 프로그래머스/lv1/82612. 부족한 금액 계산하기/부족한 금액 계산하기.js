function solution(price, money, count) 
{
    for(let i=1 ; i<count+1; i++ )
    {
        money-= price*i
        console.log(money)
    }
    if(money<0) return -(money);
    else return 0;
}
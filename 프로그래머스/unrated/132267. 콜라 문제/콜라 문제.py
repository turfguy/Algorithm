def solution(a, b, n):
    answer = 0
    while(n>=a):
        pivot = (n//a)*b
        answer += pivot
        n = (n%a)+pivot 
        
        
    return answer
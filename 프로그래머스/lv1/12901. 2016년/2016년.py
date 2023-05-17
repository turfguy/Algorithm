def solution(a, b):
    month = [0,31,29,31,30,31,30,31,31,30,31,30,31]
    day = ['THU','FRI','SAT','SUN','MON','TUE','WED']
    sum = 0
    for i in range(1,a):
        sum += month[i]
    sum += b
    
    return day[sum%7]
   
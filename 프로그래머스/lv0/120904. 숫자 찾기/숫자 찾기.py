def solution(num, k):
    arr = [ n for n in str(num)]
    return arr.index(str(k))+1 if str(k) in arr else -1
    
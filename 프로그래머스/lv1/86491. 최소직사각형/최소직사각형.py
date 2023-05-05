def solution(sizes):
    answer = 0
    w = 0
    h = 0
    sizes.sort(reverse=True)
    for i,j in sizes:
        if max(i,j)> w : w = max(i,j)
        if min(i,j)> h : h = min(i,j)    
    return w*h
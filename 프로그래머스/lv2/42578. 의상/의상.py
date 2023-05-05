def solution(clothes):
    my_dict = {}
    for i,j in clothes:
        my_dict[i] = j
    count_dict = {}
    for k, v in my_dict.items():
        if v in count_dict:
            count_dict[v] += 1
        else:
            count_dict[v] = 1
    answer = 1
    for k,v in count_dict.items():
            answer*=(count_dict[k]+1)
    return(answer-1)

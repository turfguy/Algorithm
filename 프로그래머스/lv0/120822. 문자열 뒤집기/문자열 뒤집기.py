def solution(my_string):
    my_list = list(my_string)
    answer_list = []
    for i in range(len(my_list)-1,-1,-1):
        answer_list.append(my_list[i])
    
    return ''.join(answer_list)
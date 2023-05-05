def solution(nums):
    answer = 0
    my_dict = {}
    limit = len(nums)//2
    
    for num in nums:
        if num in my_dict : my_dict[num] +=1
        else : my_dict[num] =1
    len_dict = len(my_dict)
    
    if limit>len_dict : return len_dict
    else: return limit

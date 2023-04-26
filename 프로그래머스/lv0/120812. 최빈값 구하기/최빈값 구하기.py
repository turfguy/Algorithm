def solution(array):
    new_set = set(array)
    new_dict= {num:0 for num in new_set};
    for num in array:
        new_dict[num]+=1
    pivot = 0
    pivot_value = 0
    max_value = max(new_dict.values())
    max_key = max(new_dict,key=new_dict.get)
    print(max_key)
    for key in new_dict:
        if new_dict[key]==max_value and key!=max_key : 
                return -1
    return max_key
      

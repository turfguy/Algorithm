def solution(answers):
    answer = []
    pattern1 = [1,2,3,4,5]
    pattern2 = [2,1,2,3,2,4,2,5]
    pattern3 = [3,3,1,1,2,2,4,4,5,5]
    count = [0,0,0]
    for idx,value in enumerate(answers):
        print(pattern1[idx%len(pattern1)],pattern2[idx%len(pattern1)],pattern3[idx%len(pattern1)])
        if value == pattern1[idx%5]: count[0]+=1
        if value == pattern2[idx%8]: count[1]+=1
        if value == pattern3[idx%10]: count[2]+=1
    for who,score in enumerate(count):
        if score == max((count)) : answer.append(who+1)
    return sorted(answer)
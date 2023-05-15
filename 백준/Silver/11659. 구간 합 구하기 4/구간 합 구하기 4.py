import sys
input = sys.stdin.readline

N,M = map(int,input().split())
num_list = list(map(int,input().split()))
sum_list = [0]
sum = 0
for x in range(len(num_list)):
    sum+= num_list[x]
    sum_list.append(sum)
for _ in range(M):
    i,j = map(int,input().split())
    print(sum_list[j]-sum_list[i-1])


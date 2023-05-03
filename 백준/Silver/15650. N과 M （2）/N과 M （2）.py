N,M = map(int,input().split())
n_list = [i for i in range(1,N+1)]
n_visited = [False for _ in range(N)]

array = []
n_last = 0
def dfs(num):
    if(len(array)==M):
        print(*array)
        return
    for i  in range(num,N):
        if n_visited[i] : continue
        n_visited[i] = True
        array.append(n_list[i])
        n_last = n_list[i]
        dfs(i+1)
        n_visited[i] = False
        array.pop()

dfs(0)
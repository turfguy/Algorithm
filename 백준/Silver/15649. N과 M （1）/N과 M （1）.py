N,M = map(int,input().split())
n_list = [i for i in range(1,N+1)]
n_visited = [False for _ in range(N)]

array = []
def dfs(num):
    if(num==M):
        print(*array)
        return
    for i  in range(0,N):
        if n_visited[i]==True: continue
        n_visited[i] = True
        array.append(n_list[i])
        dfs(num+1)
        n_visited[i] = False
        array.pop()

dfs(0)

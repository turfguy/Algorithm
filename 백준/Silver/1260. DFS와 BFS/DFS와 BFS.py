from collections import deque
N,M,V = map(int,input().split())
graph = [[False]*(N+1) for _ in range(N+1)]
# print(graph)
for _ in range(M):
    a,b = map(int,input().split())
    graph[a][b] = True
    graph[b][a] = True

dfs_visited = [False] * (N+1)
bfs_visited = [False] * (N+1)
# print(dfs_visited)
# print(bfs_visited)
def dfs(V):
    dfs_visited[V] = True
    print(V, end=" ")
    for i in range(1, N+1):
        if not dfs_visited[i] and graph[V][i]:
            dfs(i)
def bfs(V):
    q = deque([V])
    bfs_visited[V] = True
    while(q):
        V = q.popleft()
        print(V, end=" ")
        for i in range(1,N+1):
            if not bfs_visited[i] and graph[V][i]:
                q.append(i)
                bfs_visited[i] = True
dfs(V)
print('')
bfs(V)

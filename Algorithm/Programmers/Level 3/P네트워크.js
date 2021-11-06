const solution = (n, computers) => {
    let answer = 0, visited = [];
    for (let i = 0; i < computers.length; i++) {
        visited[i] = false;
    }

    const dfs = (graph, node, visited) => {
        visited[node] = true;
        graph[node].forEach((connected, index) => {
            if (index != node) {
                if (visited[index] === false && graph[node][index] === 1) {
                    dfs(graph, index, visited);
                }
            }
        });
    }

    visited.forEach((node, index) => {
        if (node === false) {
            answer += 1;
            dfs(computers, index, visited);
        }
    });

    return answer;
}
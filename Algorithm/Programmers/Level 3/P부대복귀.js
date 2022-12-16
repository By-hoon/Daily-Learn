function solution(n, roads, sources, destination) {
  const roadMap = new Array(n + 1).fill(null).map((_) => []);
  const visited = new Array(n + 1).fill(Infinity);
  roads.forEach((road) => {
    roadMap[road[0]].push(road[1]);
    roadMap[road[1]].push(road[0]);
  });
  const queue = [destination];
  bfs(queue, roadMap, destination, visited);

  return sources.map((v) => {
    if (visited[v] === Infinity) return -1;
    else return visited[v];
  });
}

const bfs = (queue, roadMap, destination, visited) => {
  visited[destination] = 0;
  while (queue.length > 0) {
    const current = queue.shift();
    for (let next of roadMap[current]) {
      if (visited[current] + 1 < visited[next]) {
        visited[next] = visited[current] + 1;
        queue.push(next);
      }
    }
  }
};

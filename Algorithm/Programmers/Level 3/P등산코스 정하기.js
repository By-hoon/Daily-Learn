function solution(n, paths, gates, summits) {
  const edges = Array.from({ length: n + 1 }, () => []);
  for (let i = 0; i < paths.length; i++) {
    const [start, arrival, cost] = paths[i];
    edges[start].push([cost, arrival]);
    edges[arrival].push([cost, start]);
  }
  for (let summit of summits) {
    edges[summit] = [];
  }
  const nodes = new Array(n + 1).fill(Infinity);
  gates.forEach((gate) => (nodes[gate] = 0));

  let queue = [...gates];

  while (queue.length) {
    const newQueue = [];
    while (queue.length) {
      const current = queue.pop();
      edges[current].forEach((edge) => {
        const [cost, arrival] = edge;
        const maxCost = Math.max(nodes[current], cost);
        if (nodes[arrival] > maxCost) {
          nodes[arrival] = maxCost;
          newQueue.push(arrival);
        }
      });
    }
    queue = [...newQueue];
  }
  const answer = summits.map((summit) => [summit, nodes[summit]]);
  answer.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });
  return answer[0];
}

solution(
  6,
  [
    [1, 2, 3],
    [2, 3, 5],
    [2, 4, 2],
    [2, 5, 4],
    [3, 4, 4],
    [4, 5, 3],
    [4, 6, 1],
    [5, 6, 1],
  ],
  [1, 3],
  [5]
);

function solution(n, edges) {
  const connects = new Array(n).fill().map((_) => []);
  for (const edge of edges) {
    connects[edge[0] - 1].push(edge[1] - 1);
    connects[edge[1] - 1].push(edge[0] - 1);
  }
  const visited = [1];
  const queue = [0];
  while (queue.length) {
    const currentNode = queue.shift();
    for (const nextNode of connects[currentNode]) {
      if (!visited[nextNode]) {
        visited[nextNode] = visited[currentNode] + 1;
        queue.push(nextNode);
      }
    }
  }
  let max = 0;
  let count = 0;
  visited.forEach((node) => {
    if (node > max) {
      max = node;
      count = 1;
    } else if (max === node) count++;
  });
  return count;
}

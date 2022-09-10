function solution(n, wires) {
  let answer = n;
  const net = {};
  wires.map((wire) => {
    const [a, b] = wire;
    if (!net[a]) net[a] = [];
    if (!net[b]) net[b] = [];
    net[a].push(b);
    net[b].push(a);
  });
  wires.map((wire) => {
    const [a, b] = wire;
    const compareCount = Math.abs(bfs(net, a, b) - bfs(net, b, a));
    answer = answer > compareCount ? compareCount : answer;
  });
  return answer;
}

const bfs = (net, root, exception) => {
  let count = 0;
  const queue = [root];
  const visited = [];
  visited[root] = true;
  while (queue.length) {
    const currentNode = queue.shift();
    net[currentNode].forEach((nextNode) => {
      if (nextNode !== exception && !visited[nextNode]) {
        visited[nextNode] = true;
        queue.push(nextNode);
      }
    });
    count++;
  }
  return count;
};

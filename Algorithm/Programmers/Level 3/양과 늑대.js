function solution(info, edges) {
  let answer = 0;
  const nodes = Array.from({ length: info.length }, () => []);
  edges.forEach((edge) => {
    nodes[edge[0]].push(edge[1]);
  });
  const dfs = (sheep, wolf, current, unvisited) => {
    let currentIndex = unvisited.indexOf(current);
    if (info[current] == 1) {
      wolf++;
    } else {
      sheep++;
    }
    answer = Math.max(answer, sheep);
    if (sheep == wolf) return;
    unvisited.push(...nodes[current]);
    unvisited.splice(currentIndex, 1);

    for (const next of unvisited) {
      dfs(sheep, wolf, next, unvisited);
    }
  };
  dfs(0, 0, 0, [0]);
  return answer;
}

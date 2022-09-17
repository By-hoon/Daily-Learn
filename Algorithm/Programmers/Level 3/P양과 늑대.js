function solution(info, edges) {
  let answer = 0;
  const nodes = Array.from({ length: info.length }, () => []);
  edges.forEach((edge) => {
    nodes[edge[0]].push(edge[1]);
  });
  const dfs = (sheep, wolf, current, unvisited) => {
    let newUnvisited = [...unvisited];
    let currentIndex = newUnvisited.indexOf(current);
    if (info[current] == 1) {
      wolf++;
    } else {
      sheep++;
    }
    answer = Math.max(answer, sheep);
    if (sheep == wolf) return;
    newUnvisited.push(...nodes[current]);
    newUnvisited.splice(currentIndex, 1);

    for (const next of newUnvisited) {
      dfs(sheep, wolf, next, newUnvisited);
    }
  };
  dfs(0, 0, 0, [0]);
  return answer;
}

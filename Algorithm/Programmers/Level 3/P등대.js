function solution(n, lighthouse) {
  let answer = 0;
  const visited = new Array(n + 1).fill(false);

  while (lighthouse.length) {
    const paths = Array.from({ length: n + 1 }, (_) => []);

    lighthouse.forEach((lh) => {
      const [start, end] = lh;

      paths[start].push(end);
      paths[end].push(start);
    });

    paths.forEach((path) => {
      if (path.length !== 1) return;
      path.forEach((target) => {
        if (!visited[[target]]) {
          visited[[target]] = true;
          if (paths[[target]].length === 1) {
            answer += 0.5;
            return;
          }
          answer += 1;
        }
      });
    });

    lighthouse = lighthouse.filter((lh) => {
      const [start, end] = lh;

      return !visited[start] && !visited[end];
    });
  }
  return answer;
}

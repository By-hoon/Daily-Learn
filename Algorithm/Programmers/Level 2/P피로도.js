function solution(k, dungeons) {
  let clearCount = 0;
  const visited = new Array(dungeons.length).fill(false);
  const dfs = (k, currentCount) => {
    clearCount = Math.max(clearCount, currentCount);
    dungeons.forEach((dungeon, index) => {
      if (k >= dungeon[0] && !visited[index]) {
        visited[index] = true;
        dfs(k - dungeon[1], currentCount + 1);
        visited[index] = false;
      }
    });
  };
  dfs(k, 0);
  return clearCount;
}

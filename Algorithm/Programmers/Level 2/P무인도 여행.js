function solution(maps) {
  let answer = [];
  const newMap = maps.map((n) => n.split(""));
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  const mapCol = newMap.length;
  const mapRow = newMap[0].length;

  for (let i = 0; i < mapCol; i++) {
    for (let j = 0; j < newMap[0].length; j++) {
      if (newMap[i][j] !== "X") {
        const start = newMap[i][j];
        newMap[i][j] = "X";
        answer.push(dfs(i, j, start));
      }
    }
  }

  function dfs(x, y, num) {
    let food = Number(num);

    for (let i = 0; i < 4; i++) {
      const newX = x + dx[i];
      const newY = y + dy[i];

      if (newX >= 0 && newY >= 0 && newX < mapCol && newY < mapRow) {
        if (newMap[newX][newY] !== "X") {
          const next = newMap[newX][newY];
          newMap[newX][newY] = "X";
          food += dfs(newX, newY, next);
        }
      }
    }
    return food;
  }

  answer.sort((a, b) => a - b);

  return answer.length ? answer : [-1];
}

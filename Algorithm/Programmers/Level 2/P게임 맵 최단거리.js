function solution(maps) {
  const dy = [1, 0, -1, 0];
  const dx = [0, -1, 0, 1];
  const row = maps.length;
  const col = maps[0].length;
  const mapCount = [...maps].map((r) => r.map((r) => 1));

  const queue = [[0, 0]];
  while (queue.length) {
    const [y, x] = queue.shift();
    for (let k = 0; k < 4; k++) {
      const ny = y + dy[k];
      const nx = x + dx[k];

      if (ny >= 0 && nx >= 0 && ny < row && nx < col) {
        if (maps[ny][nx] === 1 && mapCount[ny][nx] === 1) {
          mapCount[ny][nx] = mapCount[y][x] + 1;
          queue.push([ny, nx]);
        }
      }
    }
  }
  return mapCount[row - 1][col - 1] === 1 ? -1 : mapCount[row - 1][col - 1];
}

const maps = [[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]];
solution(maps);
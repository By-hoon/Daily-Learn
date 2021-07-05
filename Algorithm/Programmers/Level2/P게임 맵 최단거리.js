function solution(maps) {
    // 남서북동 순서
    const dy = [1, 0, -1, 0];
    const dx = [0, -1, 0, 1];
    const row = maps.length; // 행
    const col = maps[0].length; // 열
    const visitCount = [...maps].map((r) => r.map((r) => 1));

    const queue = [[0, 0]];
    while (queue.length) {
      const [y, x] = queue.shift();
  
      for (let k = 0; k < 4; k++) {
        const ny = y + dy[k];
        const nx = x + dx[k];
  
        if (ny >= 0 && nx >= 0 && ny < row && nx < col) {
          if (maps[ny][nx] === 1 && visitCount[ny][nx] === 1) {
            visitCount[ny][nx] = visitCount[y][x] + 1;
            queue.push([ny, nx]);
          }
        }
      }
    }
    return visitCount[row - 1][col - 1] === 1 ? -1 : visitCount[row - 1][col - 1];
  }
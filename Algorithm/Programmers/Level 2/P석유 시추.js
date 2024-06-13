function solution(land) {
  const rowLength = land[0].length;
  const colLength = land.length;

  const colMove = [-1, 1, 0, 0];
  const rowMove = [0, 0, -1, 1];

  const visited = new Array(colLength).fill().map((_) => new Array(rowLength).fill(0));

  let oilNum = 1;
  const oil = {};

  let max = 0;

  const isHaveOil = (col, row) => {
    let oilCount = 0;
    const queue = [{ col, row }];

    visited[col][row] = oilNum;

    while (queue.length) {
      const cur = queue.shift();
      let curCol = cur.col;
      let curRow = cur.row;

      if (land[curCol][curRow] === 1) {
        oilCount++;
      }

      for (let i = 0; i < 4; i++) {
        let newCol = curCol + colMove[i];
        let newRow = curRow + rowMove[i];

        if (newCol < 0 || newCol >= colLength || newRow < 0 || newRow >= rowLength || visited[newCol][newRow])
          continue;

        if (land[newCol][newRow] === 1) {
          visited[newCol][newRow] = oilNum;
          queue.push({ col: newCol, row: newRow });
        }
      }
    }

    oil[oilNum++] = oilCount;
  };

  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (visited[col][row] === 0 && land[col][row] > 0) isHaveOil(col, row);
    }
  }

  for (let row = 0; row < rowLength; row++) {
    let sum = 0;
    const set = new Set();

    for (let col = 0; col < colLength; col++) {
      if (visited[col][row] !== 0) set.add(visited[col][row]);
    }
    set.forEach((num) => {
      sum += oil[num];
    });

    if (sum > max) max = sum;
  }

  return max;
}

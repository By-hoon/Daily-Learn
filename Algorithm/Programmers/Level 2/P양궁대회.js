function solution(n, info) {
  let answer = Array.from({ length: 11 }, () => 0);
  let diff = 0;

  const playGame = (score, current, count, board) => {
    if (n < count) return;

    if (current > 10) {
      let currentDiff = score[0] - score[1];
      if (diff < currentDiff) {
        board[10] = n - count;
        diff = currentDiff;
        answer = board;
      }
      return;
    }

    if (n > count) {
      let newBoard = [...board];
      newBoard[10 - current] = info[10 - current] + 1;
      playGame([score[0] + current, score[1]], current + 1, count + info[10 - current] + 1, newBoard);
    }

    if (info[10 - current] > 0) {
      playGame([score[0], score[1] + current], current + 1, count, board);
    } else {
      playGame(score, current + 1, count, board);
    }
  };

  playGame([0, 0], 0, 0, answer);

  return diff == 0 ? [-1] : answer;
}

function solution(x, y, n) {
  const answer = Array.from({ length: y + 1 }, () => Infinity);

  answer[x] = 0;
  for (let i = x; i <= y; i++) {
    answer[i + n] = Math.min(answer[i + n], answer[i] + 1);
    answer[i * 2] = Math.min(answer[i * 2], answer[i] + 1);
    answer[i * 3] = Math.min(answer[i * 3], answer[i] + 1);
  }
  return answer[y] === Infinity ? -1 : answer[y];
}

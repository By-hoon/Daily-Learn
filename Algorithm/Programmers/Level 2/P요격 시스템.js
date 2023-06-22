function solution(targets) {
  let answer = 0;
  let current = -1;

  targets.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  targets.forEach((target) => {
    const [left, right] = target;
    if (left >= current) {
      answer++;
      current = right;
    }
  });
  return answer;
}
